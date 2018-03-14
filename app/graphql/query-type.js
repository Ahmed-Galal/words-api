const { GraphQLObjectType, GraphQLList, GraphQLID } = require("graphql");
const wordModel = require("../data/words.data");
const { wordType } = require("./word-type");

exports.queryType = new GraphQLObjectType({
  name: "Query",
  description: "this is the query type",
  fields: {
    words: {
      type: new GraphQLList(wordType),
      description: "this is the list of words returned",
      resolve: (_, args) => {
        return wordModel.getAllWords();
      }
    },
    word: {
      type: wordType,
      description: "this is single word return",
      args: {
        id: {
          type: GraphQLID,
          description: "this is the search id"
        }
      },
      resolve: (_, args) => {
        return wordModel.getWordById(args.id);
      }
    }
  }
});