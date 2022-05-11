'use strict';
// IMPORTS
const { Model } = require('sequelize');


// MODEL
module.exports = (sequelize, DataTypes) => {
    class Event extends Model {
        static associate({ Stage, StageEvent, MeetGreet, SetTime }) {
            // stages
            Event.belongsToMany(Stage, {
                foreignKey: "event_id",
                as: "stages", 
                through: StageEvent
            })
            // meet and greets
            Event.hasMany(MeetGreet, {
                foreignKey: "event_id",
                as: "meet_greets"
            })
            // set times
            Event.hasMany(SetTime, {
                foreignKey: "event_id",
                as: "set_times"
            })
        }
    }
    
    
    Event.init({
        event_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        event_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Event',
        tableName: 'events',
        timeStamps: false
    });
    return Event;
}








