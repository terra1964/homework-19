// индекс массы тела
const minindex = 16;
const index1 = 18.5;
const index2 = 25;
const index3 = 30;
const index4 = 35;
const maxindex = 40;

let height = +prompt(`Введите Ваш Рост? (в см)`)/100;
let massa = +prompt(`Введите ваш вес? (в кг)`);
let index = massa / (height * height);

if (index < minindex) {
    console.log (`Ваш индекс ${index} кг/м.кв`);
    console.log (`Диагноз - Выраженный дефицит массы тела	Рекомендации - Необходима срочная консультация специалиста`);
}else if (index >= 16 && index < index1){
    console.log (`Ваш индекс ${index} кг/м.кв`);
    console.log (`Диагноз - Недостаточная (дефицит) масса тела		Рекомендации -Необходима консультация специалиста `);
}else if (index >= 18.5 && index < 25){
    console.log (`Ваш индекс ${index} кг/м.кв`);
    console.log (`Диагноз - Норма`);
}else if (index >= 25 && index < 30){
    console.log (`Ваш индекс ${index} кг/м.кв`);
    console.log (`Диагноз - Избыточная масса тела (предожирение) Рекомендации - Необходима консультация специалиста`);
}else if (index >= 30 && index < 35){
    console.log (`Ваш индекс ${index} кг/м.кв`);
    console.log (`Диагноз - Ожирение первой степени	             Рекомендации - Необходима консультация специалиста`);
}else if (index >= 35 && index < 40){
    console.log (`Ваш индекс ${index} кг/м.кв`);
    console.log (`Диагноз - Ожирение второй степени	             Рекомендации - Необходима консультация специалиста`);
}else if (index >= 40){
console.log (`Ваш индекс ${index} кг/м.кв`);
console.log (`Диагноз - Ожирение третьей степени (морбидное)	Рекомендации - Необходима срочная консультация специалиста`);
}

// высокосный год

let year = +prompt("Введите год");
if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0){
            console.log (`${year} Высокосный год`);
        }else
        console.log (`${year} Не высокосный год`);
    }
    else
    console.log (`${year} Высокосный год`);
}else{
    console.log (`${year} Не высокосный год`);
}
    
