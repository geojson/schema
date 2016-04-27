.DELETE_ON_ERROR:
export PATH := ./bin/:$(PATH)

BUILD_DIR := ./build
SRC_DIR := ./src/schema

SRC_SCHEMA := $(shell ls $(SRC_DIR)/*.json)
BUILD_SCHEMA := $(patsubst $(SRC_DIR)/%,$(BUILD_DIR)/%,$(SRC_SCHEMA))

.PHONY: all
all: $(BUILD_SCHEMA)

# Install dependencies
node_modules/.install: package.json
	@npm install
	@touch $@

# Build all schema
$(BUILD_SCHEMA): $(SRC_SCHEMA) node_modules/.install
	@mkdir -p $(dir $@)
	@deref $(patsubst $(BUILD_DIR)/%,$(SRC_DIR)/%,./$@) > $@

.PHONY: clean
clean:
	@rm -rf $(BUILD_DIR)
