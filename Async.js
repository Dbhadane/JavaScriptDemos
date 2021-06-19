let sayhi=async function()
{
    return 'hi';
}
let sayhi1=async function()
{
    return new Promise(function(resolve,reject)
    {
        resolve()
    });
}