/**
 * Класс BaseModal
 * Используется как базовый класс всплывающего окна
 */
class BaseModal {
    constructor( element ) {
        this.element = element;
        this.domElement = element[0];

    }

    /**
     * Открывает всплывающее окно
     */
    open() {

    }

    /**
     * Закрывает всплывающее окно
     */
    close() {

    }
}