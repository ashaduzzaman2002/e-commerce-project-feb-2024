class ApiFeatures {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;


    }

    //*srarch
    search() {
        const key = Object.keys(this.queryStr).toString();
        // console.log(key);
        // console.log(this.queryStr[key]);
        const val = this.queryStr[key];
        
        // const keyword = this.queryStr.keyword  //* dosent work
        const keyword = key
        ? {
            name: {
                // $regex: this.queryStr.keyword,
                // $regex: key,
                $regex: val,
                $options: "i",
            },
        }
        : {};

        // console.log(keyword);

        this.query = this.query.find({ ...keyword });
        return this;

    }


    //* filter
    filter(){
        const queryCopy = {...this.queryStr}
        console.log(queryCopy);

        //* removing same fields for category
        const removingFields =["keyword","page","limit"];
        removingFields.forEach((key)=> delete queryCopy[key]);
        console.log(queryCopy);
        
        console.log(JSON.stringify(queryCopy));

        //!
        const newObj = {};
        for (const key in queryCopy) {
            if (queryCopy.hasOwnProperty(key)) {
              newObj[String(key)] = String(queryCopy[key]); // Convert both key and value to strings
            }
          }
          console.log("newobj",newObj);
        //   this.query = this.query.find(newObj);
        //!

        let queryStr = JSON.stringify(queryCopy);
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);

        console.log(JSON.parse(queryStr));
        this.query = this.query.find(JSON.parse(queryStr));
        return this;
    }
}

module.exports = ApiFeatures;