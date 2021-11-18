"use strict";

const CORE_CLASSES = [
    barbarian,
    witch_doctor,
    wizard,
    monk,
    demon_hunter,
];

const ALL_CLASSES = clone(CORE_CLASSES);
ALL_CLASSES.push(crusader);
ALL_CLASSES.push(necromancer);

const RANDO_D3_APP = {
    init: function(){
        this.name_gen = Object.create(NAME_GENERATOR).init();
        
        this.setState(history.state);
        this.addUiListeners();

        return this;
    },

    setInstallPromptHandler: function(){
        window.onbeforeinstallprompt = function(event){
            // Prevent Chrome <= 67 from automatically showing the prompt
            event.preventDefault();
            // Stash the event so it can be triggered later.
            app.installPromptEvent = event;

            show($('install-app'), true);
        };
        return this;
    },

    addUiListeners: function(){
        var self = this;
        $("install-app").addEventListener("click", () => self.installApp());
        $("randomize_create").addEventListener("click", () => self.create());
        $("randomize_levelup").addEventListener("click", () => self.levelUp());
        $("randomize_skills").addEventListener("click", () => self.randomSkills());
    },

    create : function(){
        var self = this;
        var list_classes = clone(CORE_CLASSES);

        if ($("expansion_reaper").checked){
            list_classes.push(crusader);
        }
        if ($("expansion_rise").checked){
            list_classes.push(necromancer);
        }

        var class_choice = chooseFromList(list_classes);
        var class_name = class_choice.name;

        // set the class
        setSelectedValue($("character_class"), class_name);

        // randomize the model
        randomizeList("character_model");

        // generate a name
        $("character_name").value = self.generateName(class_choice.name_dict, getSelectedValue($("character_model")));

        // set level to 1
        $("character_level").value = 1;
        
        self.randomizeSkills(class_name, 1);
    },

    levelUp: function(){
        var self = this;
        // update level
        var level = parseInt($("character_level").value) + 1;
        if (level >= 70){
            level = 70;
        }
        $("character_level").value = level; 

        self.randomizeSkills(getSelectedValue($("character_class")), level);
    },
    
    randomSkills: function(){
        var self = this;
        var level = parseInt($("character_level").value);
        self.randomizeSkills(getSelectedValue($("character_class")), level);
    },

    randomizeSkills: function(str_class_name, int_level){
        var self = this;
    
        var class_choice = eval(str_class_name);

        //primary
        var skill = chooseFromList(listFromLevel(class_choice.primary, int_level));
        var rune = chooseFromList(listFromLevel(skill.runes, int_level), true);
        self.setActiveSkill($("skill-primary"),"Primary", skill, rune);
        
        //secondary
        skill = chooseFromList(listFromLevel(class_choice.secondary, int_level));
        rune = undefined;
        if (skill != undefined){
            rune = chooseFromList(listFromLevel(skill.runes, int_level), true);
        }
        self.setActiveSkill($("skill-secondary"),"Secondary", skill, rune);
        
        //one
        skill = chooseFromList(listFromLevel(class_choice.one.skills, int_level));
        rune = undefined;
        if (skill != undefined){
            rune = chooseFromList(listFromLevel(skill.runes, int_level), true);
        }
        self.setActiveSkill($("skill-one"),class_choice.one.name, skill, rune);
        
        //two
        skill = chooseFromList(listFromLevel(class_choice.two.skills, int_level));
        rune = undefined;
        if (skill != undefined){
            rune = chooseFromList(listFromLevel(skill.runes, int_level), true);
        }
        self.setActiveSkill($("skill-two"),class_choice.two.name, skill, rune);
        
        //three
        skill = chooseFromList(listFromLevel(class_choice.three.skills, int_level));
        rune = undefined;
        if (skill != undefined){
            rune = chooseFromList(listFromLevel(skill.runes, int_level), true);
        }
        self.setActiveSkill($("skill-three"),class_choice.three.name, skill, rune);

        //four
        skill = chooseFromList(listFromLevel(class_choice.four.skills, int_level));
        rune = undefined;
        if (skill != undefined){
            rune = chooseFromList(listFromLevel(skill.runes, int_level), true);
        }
        self.setActiveSkill($("skill-four"),class_choice.four.name, skill, rune);
        
        //Passive
        var skills = chooseSetFromList(listFromLevel(class_choice["Passive Skills"], int_level), self.getPassiveCount(int_level));
        for(var passive_idx = 1; passive_idx<=4; passive_idx++){
            var ele_tr = $("passive-skill-"+passive_idx);
            if (skills != undefined && skills.length >= passive_idx){
                var skill = skills[passive_idx-1];
                self.setPassiveSkill(ele_tr,"Passive #"+passive_idx, skill, rune);
                ele_tr.hidden = false;
            } else {
                ele_tr.hidden = true;
            }
        }
    },

    setActiveSkill : function(ele_tr, title, skill, rune){
        removeAllChildren(ele_tr);
        if (skill !== undefined){
            var rune_name = rune == undefined ? "none" : rune.name;
            ele_tr.innerHTML = 
            `<td>${title}</td>
             <td>${skill.name}</td>
             <td>${rune_name}</td>`;
        }
    },
    
    setPassiveSkill : function(ele_tr, title, skill){
        removeAllChildren(ele_tr);
        if (skill !== undefined){
            var row = (skill.idx) % 4 + 1;
            var column = Math.floor((skill.idx / 4) + 1);

            ele_tr.innerHTML = 
            `<td>${skill.name}</td>
             <td>${row}</td>
             <td>${column}</td>`;
        }
    },

    getPassiveCount: function(int_level){
        if (int_level >= 70){
            return 4;
        }
        if (int_level >= 30) {
            return 3;
        }
        if (int_level >= 20){
            return 2;
        }
        if (int_level >= 10){
            return 1;
        }
        
        return 0;
    },

    generateName: function(dict_class_words, str_class_model){
        var self = this;
        return self.name_gen.generate(dict_class_words, str_class_model);
    },

    installApp: function(){
        show($('install-app'), false);
      
        // Show the modal add to home screen dialog
        this.installPromptEvent.prompt();
        // Wait for the user to respond to the prompt
        this.installPromptEvent.userChoice.then((choice) => {
            if (choice.outcome === 'accepted') {
              console.debug('User accepted the A2HS prompt');
            } else {
              console.debug('User dismissed the A2HS prompt');
            }
            // Clear the saved prompt since it can't be used again
            this.installPromptEvent = null;
        });
    },

    saveState: function() {
        history.replaceState( this.getState(), window.title, window.location);
    },

    getState: function() {
        // TODO : build a JSON object to stash the config variables in
    },

    setState: function() {
        // TODO : load the data from getStash back into the UI
    },

};

/* HTML functions */
const app = Object.create(RANDO_D3_APP).setInstallPromptHandler();

function init(){
    app.init();

}

