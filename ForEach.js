array = ["Один", "Два", "Три", "Четыре"];
array.forEach(function(element, index)
{
    cosole.log(element.index[1]);
});

//Один Два Три Четыре

array = ["Один", "Два", "Три", "Четыре"];
array.forEach(function(element, index)
{
    if (index == 1) {
    console.log(element);
    }
});
// Два


array = ["Один", "Два", "Три", "Четыре"];
array.forEach(function(element, index, array)
{
    array[index] = element.toUpperCase();
    console.log(element);
});

//ОДИН ДВА ТРИ ЧЕТЫРЕ

array = ["Один", "Два", "Три", "Четыре"];
array.forEach(function(element, index, array)
{
    if (index == 2) {
        array[index] = element.toUpperCase();
	console.log(array[index]);
    }
});

//ТРИ
