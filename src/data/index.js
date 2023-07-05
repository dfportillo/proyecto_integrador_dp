import { ApiDataSource, MockDataSource } from "./sources";

// builders

const productsDataSourceBuilder = (dataSource) = () => {
    ({
        all: dataSource.getAllProducts
    })
}

const checkOutDataSourceBuilder = (dataSource) = () => {
    ({
        post: dataSource.postCheckOutData
    })
}

// Build Data Sources

const dataSource = MockDataSource();

const productsDataSource = productsDataSourceBuilder(dataSource);
const checkoutDataSource = checkOutDataSourceBuilder(dataSource);


// Export

const DataSources = {
    products: productsDataSource,
    checkout: checkoutDataSource
}

export default DataSources;