"use strict";

// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки

const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

function createCounter() {
  let counter = 0;
  return {
    increment: () => {
      return ++counter;
    },
    decrement: () => {
      return --counter;
    },
  };
}

let countNum = createCounter();

countNum.increment();
countNum.increment();
countNum.decrement();
console.log(countNum.increment());

// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.

function findElementByClass(root, searchEl) {
  if (root.className == searchEl) {
    return root;
  }
  return findElementByClass(root.children[0], searchEl);
}
const rootEl = document.getElementById("root");
const targetElement = findElementByClass(rootEl, "my-class");
console.log(targetElement);
