
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-exemplo-pipes',
  templateUrl: './exemplo-pipes.component.html',
  styleUrls: ['./exemplo-pipes.component.scss']
})
export class ExemplosPipesComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {

  }

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor assincrono'), 2000)
  })

  valorAsync2 = new Observable<string>((Observable: { next: (arg0: string) => void; }) => {
    setTimeout(() => {
      Observable.next('Valor assíncrono 2');
    }, 5000);
  });

  livro: any = {
    titulo: 'Learning JavaScript Data Structures and Algorithms 2nd ed',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://a.co/glqjpRP'
  };

  livros: string[] = ['Java', 'Angular 2'];

  filtro?: string;

  addCurso(valor: string) {
    this.livros.push(valor);
    console.log(this.livros);
  }

  obterCursos(){

    if (this.livros.length === 0 || this.filtro === undefined
    || this.filtro.trim() === '') {
      return this.livros;
    }

    return this.livros.filter(
       v => v.toLocaleLowerCase().includes(this.filtro!.toLocaleLowerCase())
    );
  }


}
