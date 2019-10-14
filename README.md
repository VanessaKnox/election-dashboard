# Election Results Dashboard  
[![Netlify Status](https://api.netlify.com/api/v1/badges/bf99eedf-1464-434b-b83b-e9e5a6b5d96a/deploy-status)](https://app.netlify.com/sites/cocky-wescoff-3d64c5/deploys)
### Data  
##### States Geographic Data  
Geographic data for state polygons accessed from [Natural Earth's 50m Cultural datasets](https://www.naturalearthdata.com/downloads/50m-cultural-vectors/).  The ETL process for getting, filtering, and simplifying this dataset is stored in the [Makefile](./Makefile) in this repo.  

To reproduce, run:
```shell
Make
```  

The filtered and simplified geojson is being hosted as a [gist](https://gist.github.com/bfreeds/6a93787b13e2c458bda2bffc09b9120b).  

##### Election Results  
Election results data is from [Time Magazine](https://github.com/TimeMagazine/presidential-election-results).

[all_results.csv](./data/all_results.csv), merges the original files:  
- [results_2004.csv](./data/results_2004.csv)  
- [results_2008.csv](./data/results_2008.csv)  
- [results_2012.csv](./data/results_2012.csv)

`all_results.csv` is hosted as a [gist](https://gist.github.com/bfreeds/16bb7a411f1c88a4d988391071cfd850).

