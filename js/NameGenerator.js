"use strict";


const NAME_GENERATOR = {

    init: function(){
        this.MAX_LENGTH = 12;
        // init stand dictionaries
        this.STD_DICT = {
            "noun":[
                "Hound",
                "Death",
                "Mark",
                "Angel",
                "Demon",
                "Daemon",
                "Slayer",
                "Wild",
                "Executioner",
                "Rabbit",
                "Snake",
                "Saint",
                "Blade",
                "Knife",
                "Sabbath",
                "Aura",
                "Storm",
                "Wyrm",
                "Dredd",
                "Pyrate",
                "Grimm",
                "Law",
            ],
            "location":[
                "Basketville",
                "Edbury Hill",
                "the North",
                "the South",
                "the East",
                "the West",
                "Kingston",
                "Nowhere",
            ],
            "color":[
                "Red",
                "Violet",
                "White",
                "Light",
                "Dark",
                "Black",
            ],
        };
        this.TEMPLATE = [
            "${noun}",
            "${noun} ${noun}",
            "${color} ${noun}",
            "${noun} of ${location}",
            "${noun} from ${location}",
            "${location} ${noun}",
            "The ${noun}",
            "The ${noun} ${noun}",
            "The ${color} ${noun}",
        ];

        return this;
    },
    
    generate: function(dict, str_class_model){
        var format = this.formattedPhrase(this.generateSpacedPhrase(dict, str_class_model));

        while (format.length > this.MAX_LENGTH){
            format = this.formattedPhrase(this.generateSpacedPhrase(dict, str_class_model));
        }

        return format
    },

    formattedPhrase : function(str_phrase){
        return str_phrase.split(' ').map(wrd => this.capitalize(wrd)).join('');
    },
    
    capitalize : function(word){
        return word.charAt(0).toUpperCase() + word.slice(1)
    },


    generateSpacedPhrase: function(dict, str_class_model){
        var template = chooseFromList(this.TEMPLATE);
        var result = "";
        var stemp = template.split("${");

        // TODO : combine the STD and class dictionaries
        var dict = this.STD_DICT;

        for(var s in stemp){
            var spart = stemp[s];
            var sremain = "";
            var endIdx = spart.indexOf("}");
            if (endIdx != -1){
                sremain = spart.substring(endIdx+1);
                spart = chooseFromList(dict[spart.substring(0,endIdx)]);
            }
            result = result + spart + sremain;
        }

        return result
    },
};
