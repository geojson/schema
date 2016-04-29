.DELETE_ON_ERROR:

BIN_DIR := ./bin
BUILD_DIR := ./build
SRC_DIR := ./src
SCHEMA_DIR := $(SRC_DIR)/schema

export PATH := $(BIN_DIR):./node_modules/.bin/:$(PATH)

SRC_SCHEMA := $(shell ls $(SCHEMA_DIR)/*.js)
BUILD_SCHEMA := $(patsubst $(SCHEMA_DIR)/%.js,$(BUILD_DIR)/%.json,$(SRC_SCHEMA))
ALL_JS := $(shell find $(SRC_DIR) -type f -name '*.js') $(shell ls $(BIN_DIR)/*)

.PHONY: all
all: $(BUILD_SCHEMA)

# Install dependencies
node_modules/.install: package.json
	@npm install
	@touch $@

# Build all schema
$(BUILD_SCHEMA): $(SRC_SCHEMA) node_modules/.install
	@mkdir -p $(dir $@)
	@format $(patsubst $(BUILD_DIR)/%.json,$(SCHEMA_DIR)/%.js,./$@) > $@

.PHONY: test
test: $(BUILD_SCHEMA) lint
	@node test/test.js

.PHONY: lint
lint: $(ALL_JS) node_modules/.install
	@eslint $(SRC_DIR) $(BIN_DIR);

.PHONY: clean
clean:
	@rm -rf $(BUILD_DIR)
