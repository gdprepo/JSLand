class Batiment {
    constructor(name, employee = null) {
        this._name = name;
        this._employee = employee;
    }

    get name()
    {
        return this._name;
    }

    set name(value)
    {
        this._name = value;
    }

    get employee()
    {
        return this._employee;
    }

    set employee(value)
    {
        this._name = value;
    }

}

module.exports = Batiment;
