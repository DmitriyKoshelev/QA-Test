export async function youCanVotes (age) {
    if (typeof age !== "number") {
    throw new Error(" Будь ласка, введіть ваш вік");    
    }

    if (age >= 18) {
        console.log("Ви можете голосувати");
        return("Ви можете голосувати")
    } else {
        console.log('Ви ще не можете голосувати');
        return('Ви ще не можете голосувати');
    }
};