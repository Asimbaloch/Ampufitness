import os
import pdfplumber
from typing import Dict
import csv

def pdf_extractor(pdf_path: str) -> str:
    
    with pdfplumber.open(pdf_path) as pdf:
        pages=pdf.pages
        text=''
        for page in pages:
            text +=page.extract_text()
            
    return text

def process_directory(directory: str) -> Dict[str, str]:
    dataset = {}
    for i, filename in enumerate(os.listdir(directory)):
        if filename.endswith('.pdf'):
            file_path=os.path.join(directory, filename)
            file_id = os.path.splitext(filename)[0]
            dataset[file_id]=pdf_extractor(file_path)
    return dataset

def save_dataset(dataset: Dict[str, str], output_directory: str, filename: str):
    os.makedirs(output_directory, exist_ok=True)
    output_path = os.path.join(output_directory, filename)
    
    
    with open(output_path, 'w', newline='', encoding='utf-8') as file:
        writer = csv.writer(file)
        writer.writerow(['id', 'text'])
        
        for file_id, text in dataset.items():
            writer.writerow([file_id, text])
            
if __name__=="__main__":
    input_directory = './backend/data'
    output_directory = './backend/database'
    output_filename = 'dataset.csv'
    dataset=process_directory(input_directory)
    save_dataset(dataset, output_directory, output_filename)