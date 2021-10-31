const { inquirerMenu, pausaMenu } = require("./helpers/inquirer")


const main = async() => {
    
    let opt;

    do {
        opt = await inquirerMenu();

        switch (opt) {
            case 1:
                console.log('opcion1');
                break;
            case 2: 
                console.log('opcion2');
                break;
            
        }
        await pausaMenu();
    } while (opt !== 0);
}

main();