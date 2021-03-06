var Word = require('./../models/word.model');

module.exports = {

    insertWord: word => {
        let newWord = new Word(word);
        return newWord.save();
    },

    getAllWords: () => {
        return Word.find({});
    },

    getWordById: (id) => {
        return Word.findById(id);
    },

    updateWord: word => {
        return Word.findByIdAndUpdate(word._id, word);
    },

    deleteWord: id => {
        return Word.remove({ "_id": id });
    }
}