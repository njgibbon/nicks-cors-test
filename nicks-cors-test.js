function main() 
{
    console.log("main function");
    console.log("ajax request to the resource which will require cors enabled");
    $.ajax
    ({
        dataType: "json",
        url: "https://api.github.com",
        success: function(data) 
        {
            console.log("log response on success");
            console.log(data);
        }
    });
}