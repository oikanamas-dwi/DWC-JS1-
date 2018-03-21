
// Homework JS1 Class 3

var submit = document.getElementById('submit');
submit.addEventListener('click', catalogFunction);

var catalog = [];


function catalogFunction() {

    //clear out the catalog thats already there
    var catalogDiv = document.getElementById('catalog');
    catalogDiv.innerHTML = '';

    var prodType = document.getElementById('product_type').value;
    var productType = document.getElementById('product_type');
    var prodName = document.getElementById('product_name').value;
    var productName = document.getElementById('product_name');
    var prodPrice = document.getElementById('product_price').value;
    var productPrice = document.getElementById('product_price');

    // if (prodType || prodName || prodPrice === "") {
    //
    //     console.log('incorrect');
    //
    // } else {
    //
    //     catalog.push({
    //         productType: prodType,
    //         productName: prodName,
    //         productPrice: prodPrice,
    //     });
    //     console.log(catalog);
    // }

    if ((prodType === "") || (prodName === "" ) || (prodPrice === "")) {

        console.log('incorrect');


    } else {

        catalog.push({
            productType: prodType,
            productName: prodName,
            productPrice: prodPrice,
        });


        var displayTable = document.getElementById('display_table');
        var productDiv = document.createElement('div');


        for (var i = 0; i < catalog.length; i++) {

            var prodObj = catalog[i];

            for (var pName in prodObj) {

                var output = prodObj[pName];

                var createCatalog = document.createElement('div');
                createCatalog.innerHTML = output;
                productDiv.appendChild(createCatalog);

            }

            //add product div to catalog
            catalogDiv.appendChild(productDiv);

        }

    }

    //clear out the input values
    productType.value = '';
    productName.value = '';
    productPrice.value = '';

}








