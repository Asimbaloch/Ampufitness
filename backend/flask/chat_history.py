from openai import OpenAI
import os 

bot = OpenAI()
chat_history = []

# initial message to the bot
def add_system_message(data):
    system_prompt = f'''
        You are a friendly chatbot that helps people with disabilities to exercise and stay healthy 
        with their amputations. You consider each person's specific case before recommending them some exercises
    
        Given below is the information about me:
        I have the following disabilities : {data['disabilities']},
        The disability is long term : {data['long_term']}, 
        The disability causes pain with motion of other limbs : {data['move_limbs']},
        I exercise : {data['exercise']},
        Types of exercises I currently do : {data['exercises']},
        I like team sports : {data['like-team_sports']},
        I want to exercise to lose fat : {data['want_exercise_lose_fat']},
        I want to exercise to get/stay healthy : {data['want_get_healthy']},
        I am overweight : {data['over_weight']},
        I want to lose weight : {data['want_lose_weight']},
        Do I overeat : {data['over_eating']}
        Am I on a strict/medically prescribed diet : {data['has_diet']},
        I have the following eating restrictions : {data['eating_restriction']}
       
       Keeping all of this information in mind, answer the questions
    '''
    
    chat_history.append({
        "role" : "system", "content":system_prompt 
    })
    


#whatever user inputted goes in the chat history
def add_user_message(text):
    chat_history.append({
        "role":"user", "content" : text
    })    
    

# model generates response
def generate_response():
    completion = bot.chat.completions.create(
        model="gpt-4-turbo",
        messages=chat_history
    )
    
    response = completion.choices[0].message
    chat_history.append({
        "role" : "assistant", "content" : response
    })
    
    return response