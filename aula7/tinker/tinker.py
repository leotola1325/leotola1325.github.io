import tkinter as tk




def mostar_():
    texto  =   input_.get()
    mostrar_texto.config(text=texto)   




janela =  tk.Tk()
janela.geometry('1440x1024')
janela.configure(bg ='#0719B8BE')


texto = tk.Label(janela, text='SEU TEXTO AQUI', fg = 'white', font = ('Montserrat', 32), bg ='#0719B8BE' )
texto.pack(pady=75)


input_ = tk.Entry(janela,font = ('Montserrat', 32) )
input_.pack(pady=40)


btn =  tk.Button(janela, text='CLIQUE', bg = 'black', fg = 'white' , font = ('Montserrat', 25), command=mostar_)
btn.pack(pady=40)


mostrar_texto =  tk.Label(janela, text = 'aqui vai mostrar um texto', bg ='#480987', fg = 'white', font = ('Montserrat', 25))
mostrar_texto.pack(pady=30)



janela.mainloop()
nome_label = tk.Label(janela,text='NOME:', font =( 'roboto', 15))
nome_label.grid(row = 0, column=0, padx= 10, pady=10)

entry_nome = tk.Entry(janela, font =( 'roboto', 15))
entry_nome.grid(row=0, column=1)


nome_email = tk.Label(janela,text='E-MAIL:', font =( 'roboto', 15))
nome_email.grid(row = 1, column=0, padx= 10, pady=10)

entry_email = tk.Entry(janela, font =( 'roboto', 15))
entry_email.grid(row=1, column=1, padx= 10, pady=10)



entry_id = tk.Label(janela, text='CPF', font =( 'roboto', 15))
entry_id.grid(row=2, column=0, padx= 10, pady=10)

entry_id = tk.Entry(janela, font =( 'roboto', 15))
entry_id.grid(row=2, column=1)