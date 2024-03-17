.DELETE_ON_ERROR:

BIN_DIR := ./bin
BUILD_DIR := ./build
SRC_DIR := ./src
SCHEMA_DIR := $(SRC_DIR)/schema

export PATH := $(BIN_DIR):./node_modules/.bin/:$(PATH)

SRC_SCHEMA := $(shell ls $(SCHEMA_DIR)/*.js)
BUILD_SCHEMA := $(patsubst $(SCHEMA_DIR)/%.js,$(BUILD_DIR)/%.json,$(SRC_SCHEMA))
ALL_JS := $(shell find $(SRC_DIR) -type f -name '*.js') $(shell ls $(BIN_DIR)/*)

.PHONY: build
build: $(BUILD_SCHEMA) $(BUILD_DIR)/package.json $(BUILD_DIR)/readme.md

# Install dependencies
node_modules/.install: package.json
	@npm install
	@touch $@

# Build all schema
$(BUILD_SCHEMA): $(SRC_SCHEMA) node_modules/.install
	@mkdir -p $(dir $@)
	@format.js $(patsubst $(BUILD_DIR)/%.json,$(SCHEMA_DIR)/%.js,./$@) > $@

$(BUILD_DIR)/package.json: package.json node_modules/.install
	@mkdir -p $(dir $@)
	@transform-package-json.js package.json > $@

$(BUILD_DIR)/readme.md: readme.md
	@mkdir -p $(dir $@)
	@cp readme.md $@

.PHONY: test
test: build lint
	@node test/test.js

.PHONY: lint
lint: $(ALL_JS) node_modules/.install
	@eslint $(ALL_JS);

.PHONY: lint-fix
lint-fix: $(ALL_JS) node_modules/.install
	@eslint --fix $(ALL_JS);

.PHONY: clean
clean:
	@rm -rf $(BUILD_DIR)
