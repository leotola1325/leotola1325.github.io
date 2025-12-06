import sqlite3


conn  = sqlite3.connect('meu_bancos2.db')
cursor = conn.cursor()
cursor.execute('''CREATE TABLE IF NOT EXISTS dados(
                
                nome TEXT,
                email TEXT,
                idade TEXT,
                endereco TEXT,
                trabalho TEXT,
                graduacao TEXT
                
               
               )''')
conn.commit()


nome  =  input('nome: ')
email = input('e-mail:')
idade  =  input('idade: ')
endereco = input('endereço:')
trabalho = input('trabalho:')
graduacao = input('graduação:')



cursor.execute('INSERT INTO dados VALUES(?,?,?,?,?,?)', (nome, email, idade, endereco, trabalho, graduacao))
conn.commit()


cursor.execute('SELECT * FROM dados')
dados  =  cursor.fetchall()
print(dados)



conn.close()