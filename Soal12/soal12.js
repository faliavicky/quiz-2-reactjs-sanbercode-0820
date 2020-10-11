class BangunDatar {
    constructor(nama){
        this.bangun = nama;
    }
    luas (){
        return " ";
    }
    keliling (){
        return " ";
    }

    get cnam(){
        return this.bangun;
    }
    set cnam(){
        this.bangun=x;
    }
}

class Lingkaran extends BangunDatar {
    constructor(jari, nama){
        super(nama);
        this.bangun = jari;
    }
    luas (){
        return " ";
    }
    keliling (){
        return " ";
    }
}

class Persegi extends BangunDatar {
    constructor(sisi, nama){
        super(nama);
        this.bangun = sisi;
    }
    luas (){
        return " ";
    }
    keliling (){
        return " ";
    }
}
