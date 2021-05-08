from chatterbot import ChatBot
from chatterbot.trainers import ListTrainer


# Creating ChatBot Instance
chatbot = ChatBot('Chatbot')


trainer = ListTrainer(chatbot)
chats = open("chatbot\\Database.txt", "r").readlines()
trainer.train(chats)

