const indexPage = async function(req, res) {

    res.json({
        success: true,
        message: "Index page is opened!"
    });
};
module.exports.indexPage = indexPage;


const listUsers = async function(req, res) {

    res.json([
        {
            first_name: 'melany',
            last_name: 'wijngaard'
        },
        {
            first_name: 'nanna',
            last_name: 'pedersen'
        },
        {
            first_name: 'amelia',
            last_name: 'mercier'
        },
        {
            first_name: 'sarah',
            last_name: 'wijngaard'
        },
        {
            first_name: 'melany',
            last_name: 'oliver'
        },
        {
            first_name: 'özkan',
            last_name: 'tekelioğlu'
        },
        {
            first_name: 'buse',
            last_name: 'dağdaş'
        }
    ]);
};
module.exports.listUsers = listUsers;