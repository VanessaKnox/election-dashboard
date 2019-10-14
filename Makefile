# Requirements
  # Mapshaper CLI

DATADIR = data
GENERATED_FILES = $(DATADIR)/ne/states_filtered.geojson


# default "Make" command will create run the rules for any files defined as a generated file
all: $(GENERATED_FILES)

# convenience command to "make clean" the download directory
clean:
	rm -rf $(DATADIR)/ne

data:
	mkdir -p $(DATADIR)

# let make know these aren't typical make rules
.PHONY: all clean data

# output cleaned & filtered geojson
$(DATADIR)/ne/states_filtered.geojson: $(DATADIR)/ne/ne_50m_admin_1_states_provinces.shp
	@echo "Filtering Natural Earth States for US"
	mapshaper $< \
	-filter 'iso_a2 === "US"' \
	-filter-fields name,region,abbrev,postal \
	-o $@ prettify

# unzip downloaded zip to get shapefile
$(DATADIR)/ne/ne_50m_admin_1_states_provinces.shp: states.zip
	@echo "Unzipping Natural Earth States"
	cd $(DATADIR); \
	unzip -d ne $<

# download state/province data from natural earth
states.zip:
	@echo "Downloading Natural Earth States..."; \
	wget --no-use-server-timestamps \
	https://www.naturalearthdata.com/http//www.naturalearthdata.com/download/50m/cultural/ne_50m_admin_1_states_provinces.zip -O $(DATADIR)/$@ 