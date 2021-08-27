import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Ticket } from './ticket.model'

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const TICKET_LIST = [
      new Ticket(1, 'ОТЗЫВ', "НЕ_ОБРАБОТАНО", new Date(2021, 6, 15, 22, 40), "Благодарность!", "Василий", "0965448566", "Мобильный", "Спасибо за отличный сервис!", []),
      new Ticket(2, 'ЖАЛОБА', "НЕ_ОБРАБОТАНО", new Date(2021, 7, 1, 13, 40), "НЕ РАБОТАЕТ!!!", "Иван", "@IVANNNN", "Telegram", 'Вообще ничего не работает!!! Почините или возвращайте деньги!!!', [], '', "Общее"),
      new Ticket(3, "ЗАПРОС УСЛУГИ", "НЕ_ОБРАБОТАНО", new Date(2021, 7, 1, 13, 40), "Дополнительная информация", "Кырылл", 'owner@grail.com', "Mail", 'Lorem ipsum dolor sit amet.', [], '', '', "Получение информации", "Директор"),
      new Ticket(4, 'ЗАПРОС ЗВОНКА', "НЕ_ОБРАБОТАНО", new Date(2021, 2, 3, 11, 23), "Необходимо обьяснить как пользоваться", "Пьётр", "уууууу", "???", 'Хочу лично обсудить вопросы', [], '0996584155', ''),
      new Ticket(5, 'ОТЗЫВ', "НЕ_ОБРАБОТАНО", new Date(2021, 6, 15, 22, 40), "Благодарность!", "Василий", "0965448566", "Мобильный", "Спасибо за отличный сервис!", []),
      new Ticket(6, 'ОТЗЫВ', "НЕ_ОБРАБОТАНО", new Date(2021, 6, 15, 22, 40), "Благодарность!", "Василий", "0965448566", "Мобильный", "Спасибо за отличный сервис!", []),
      new Ticket(7, 'ОТЗЫВ', "НЕ_ОБРАБОТАНО", new Date(2021, 6, 15, 22, 40), "Благодарность!", "Василий", "0965448566", "Мобильный", "Спасибо за отличный сервис!", []),
      new Ticket(8, 'ОТЗЫВ', "НЕ_ОБРАБОТАНО", new Date(2021, 6, 15, 22, 40), "Благодарность!", "Василий", "0965448566", "Мобильный", "Спасибо за отличный сервис!", []),
      new Ticket(9, 'ОТЗЫВ', "НЕ_ОБРАБОТАНО", new Date(2021, 6, 15, 22, 40), "Благодарность!", "Василий", "0965448566", "Мобильный", "Спасибо за отличный сервис!", []),
      new Ticket(10, 'ОТЗЫВ', "НЕ_ОБРАБОТАНО", new Date(2021, 6, 15, 22, 40), "Благодарность!", "Василий", "0965448566", "Мобильный", "Спасибо за отличный сервис!", []),
      new Ticket(11, 'ОТЗЫВ', "НЕ_ОБРАБОТАНО", new Date(2021, 6, 15, 22, 40), "Благодарность!", "Василий", "0965448566", "Мобильный", "Спасибо за отличный сервис!", []),
    ];
    return {TICKET_LIST};
  }
}