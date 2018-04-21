'use strict';

const gimei = (function() {

    var name = {

        names : [],
        gender : "male",
        firstNames : [],
        lastNames : [],
        firstNamesIndex : 0,
        lastNamesIndex : 0,
        isFirst : false,
        isLast : false,

        setNames : function(names) {
            this.names = names;
            return this;
        },

        setGender : function(gender) {
            this.gender = gender;
            this.firstNames = this.names['first_name'][this.gender];
            this.lastNames = this.names['last_name'];
            this.firstNamesIndex = Math.ceil(Math.random() * this.firstNames.length);
            this.lastNamesIndex = Math.ceil(Math.random() * this.lastNames.length);
            return this;
        },

        isMale : function() {
            return this.gender === 'male';
        },

        isFemale : function() {
            return this.gender === 'female';
        },

        first : function() {
            this.isFirst = true;
            return this;
        },

        last : function() {
            this.isLast = true;
            return this;
        },

        kanji : function() {
            return this.createName(0);
        },

        hiragana : function() {
            return this.createName(1);
        },

        katakana : function() {
            return this.createName(2);
        },

        createFirstName : function(i) {
            return this.firstNames[this.firstNamesIndex][i];
        },

        createLastName : function(i) {
            return this.lastNames[this.lastNamesIndex][i];
        },

        createFullName : function(i) {
            return this.createLastName(i) + " " + this.createFirstName(i);
        },

        createName : function(i) {
            var str = "";
            if (this.isFirst) {
                str = this.createFirstName(i);
                this.isFirst = false;
            } else if (this.isLast) {
                str = this.createLastName(i);
                this.isLast = false;
            } else {
                str = this.createFullName(i);
            }
            return str;
        }

    };

    var address = {

        addresses : [],
        prefectures : [],
        cities : [],
        towns : [],
        prefectureIndex : 0,
        cityIndex : 0,
        townIndex : 0,
        isPrefecture : false,
        isCity : false,
        isTown : false,

        setAddresses : function(addresses) {
            this.addresses = addresses['addresses'];
            this.prefectures = this.addresses['prefecture'];
            this.cities = this.addresses['city'];
            this.towns = this.addresses['town'];
            this.prefectureIndex = Math.ceil(Math.random() * this.prefectures.length);
            this.cityIndex = Math.ceil(Math.random() * this.cities.length);
            this.townIndex = Math.ceil(Math.random() * this.towns.length);
            return this;
        },

        prefecture : function() {
            this.isPrefecture = true;
            return this;
        },

        city : function() {
            this.isCity = true;
            return this;
        },

        town : function() {
            this.isTown = true;
            return this;
        },

        kanji : function() {
            return this.createAddress(0);
        },

        hiragana : function() {
            return this.createAddress(1);
        },

        katakana : function() {
            return this.createAddress(2);
        },

        createPrefecture : function(i) {
            return this.prefectures[this.prefectureIndex][i];
        },

        createCity : function(i) {
            return this.cities[this.cityIndex][i];
        },

        createTown : function(i) {
            return this.towns[this.townIndex][i];
        },

        createFullAddress : function(i) {
            return this.createPrefecture(i) + " " + this.createCity(i) + " " + this.createTown(i);
        },

        createAddress : function(i) {
            var str = "";
            if (this.isPrefecture) {
                str = this.createPrefecture(i);
                this.isPrefecture = false;
            } else if (this.isCity) {
                str = this.createCity(i);
                this.isCity = false;
            } else if (this.isTown) {
                str = this.createTown(i);
                this.isTown = false;
            } else {
                str = this.createFullAddress(i);
            }
            return str;
        }

    };

    return {
        nameObj : null,
        addressObj : null,

        name : function() {
            if (this.nameObj === null) {
                this.nameObj = name.setNames(names).setGender(Math.round(Math.random()+1) === 1 ? 'male' : 'female');
            }
            return this.nameObj;
        },

        male : function() {
            return this.name().setGender('male');
        },

        female : function() {
            return this.name().setGender('female');
        },

        address : function() {
            if (this.addressObj === null) {
                this.addressObj = address.setAddresses(addresses);
            }
            return this.addressObj;
        }
    }
})();

module.exports = gimei;
