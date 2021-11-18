"use strict";

const NAME_GENERATOR = {

    init: function(){
        // init stand dictionaries
        this.STD_DICT = {
            "noun":[
                "Hound",
            ],
            "location":[
                "Basketville"
            ],
        };
        this.TEMPLATE = [
            "The ${noun}",
            "The ${noun} of ${location}",
        ];

        return this;
    },

    generate: function(dict, str_class_model){
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
