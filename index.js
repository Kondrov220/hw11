//1
// const bankAccount = {
//     owenName: "Taras",
//     accountNumber: 17573,
//     balance: 0,
//     deposit () {
//         if(confirm("хочете покласти гроші на рахунок") !== null){
//            this.balance +=  Number(prompt("скільки ви хочете поклсти"));
//         }
//         return(`у вас ${this.balance}`);
//     },
//     withdraw () {
//         if(confirm("хочете зняти гроші з рахунок") !== null){
//            this.balance -=  Number(prompt("скільки ви хочете зняти"));
//         }
//         return(`у вас ${this.balance}`);
//     }
// }

// console.log(bankAccount.deposit());
// console.log(bankAccount.withdraw());
//2
// const weater = {
//     temperature: Number(prompt("яка температура повітря")),
//     humidity: 33,
//     windSpeed: 12,
//     isTrue ()  {
//         if(this.temperature <= 0){
//             return(true);
//         }else if(this.temperature > 0){
//             return(false);
//         }else{
//             console.log("це не число");
//         }
//     }
// }
// if(weater.isTrue() === true){
//     console.log("температура нижче 0 градусів Цельсія");
// }else if(weater.isTrue() === false){
//     console.log("температура вища 0 градусів Цельсія");
// }
//3
// const user = {
//     name: "Taras",
//     email: "taras@gmail.com",
//     password: "123456789",
//     login () {
//         if(prompt("введіть email") === this.email && prompt("введіть пароль") === this.password){
//             return("ви зареєстровані");
//         }
//     }
// }

// console.log(user.login);
//4
const movie = {
    title: "Man in Black",
    director: "Barri",
    year: 1997,
    raiting: prompt("який рейтинг в фільму"),
    isFalse () {
    if(this.raiting > 8){
        return(true);
    }else if(this.raiting <=  8){
        return(false);
    }else{
        console.log("це не число");
    }
    }
}

if(movie.isFalse() === true){
    console.log(`назва ${movie.title}, директор ${movie.director}, рік виходу ${movie.year}, рейтинг ${movie.raiting}`);
}