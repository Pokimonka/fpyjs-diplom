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
        console.log(this.element);
        console.log($(this.element));
        $(this.element).modal('show');
    }

    /**
     * Закрывает всплывающее окно
     */
    close() {
        $(this.element).modal('hide');
    }
}