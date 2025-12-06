# ATIVIDADE 2
# Crie um formulário em Tkinter
# Problema: Sistema de Cadastro de Clientes
# Você é um desenvolvedor de software e foi contratado por uma empresa de serviços para criar um sistema de cadastro de clientes. O sistema deve permitir que os clientes forneçam suas informações pessoais, como nome, idade, e-mail, endereço, celular...
# Atividade: Crie um formulário em Tkinter que contenha os seguintes campos: Nome Idade E-mail Endereço Celular
# Cep
# Cidade
# Cursos
# O formulário deve ter um botão de "Enviar" que, quando clicado, imprima as informações do cliente na console.
# Tamanho da tela = '1700x750’ 


import tkinter as tk




janela = tk.Tk()
janela.geometry('1700x750')
janela.configure(bg=    "#A3A3A3")
janela.title("Sistema de Cadastro")


titulo = tk.Label(janela, text="Sistema de Cadastro de Clientes", bg="#A3A3A3", fg="#4ED2F3", font=('Montserrat', 35))
titulo.pack(pady=40)


frame = tk.Frame(janela, bg="#A3A3A3")
frame.pack(pady=20)


def criar_campo(texto, linha):
    tk.Label(frame, text=texto, bg="#A3A3A3", fg="white", font=("Montserrat", 22)).grid(row=linha, column=0, padx=20, pady=10, sticky="w")
    entrada = tk.Entry(frame, font=("Montserrat", 22), bg="#FFFFFF", fg="#4ED2F3", width=40)
    entrada.grid(row=linha, column=1, padx=20, pady=10)
    return entrada

# Campos
nome_entry = criar_campo("Nome:", 0)
idade_entry = criar_campo("Idade:", 1)
email_entry = criar_campo("E-mail:", 2)
endereco_entry = criar_campo("Endereço:", 3)
celular_entry = criar_campo("Celular:", 4)
cep_entry = criar_campo("CEP:", 5)
cidade_entry = criar_campo("Cidade:", 6)
cursos_entry = criar_campo("Cursos:", 7)


btn = tk.Button(janela, text="Enviar", font=("Montserrat", 26), bg="#4ED2F3", fg="white", width=12, height=1)
btn.pack(pady=30)

janela.mainloop()