import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

interface toolbarItem{
  name: string;
  icon:string;
  function: Function;
}

@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.page.html',
  styleUrls: ['./formbuilder.page.scss'],
})
export class FormbuilderPage{
  currentSelector:string = 'page1';
  counters: any = {
    text: 0,
    textfield:0,
    checkbox:0,
    farmtable:0,
    farmtableentry:0,
    imagefield:0,
    group:0,
    row:0,
    column:0,
    divider:0,

  }
  toolbarItems: Array<toolbarItem> = [
    {
      name: 'Text',
      icon: 'bx bx-list-minus',
      function: ()=>{
        if(!this.isContainer()) return;
        this.counters.text += 1 ;
        const id= 'text-'+this.counters.text.toString()
        const div = this.createFieldElement(id);
        this.setValue(div, 'Test Header');
        const targetElement = this.el.nativeElement.querySelector('#' + this.currentSelector);
        this.insert(targetElement, div);
       
      }
    },
    {
      name: 'Text Field',
      icon: 'bx bx-notepad',
      function: ()=>{
        if(!this.isContainer()) return;
        this.counters.textfield += 1 ;
        const id= 'textfield-'+this.counters.textfield.toString()
        const field = this.createFieldElement(id);
        const label = this.createElement('whitespace-nowrap');
        this.setValue(label, 'Label: ');
        const container = this.createElement('w-full h-full px-2');
        const line = this.createElement('w-full mt-4 border-b-solid border-b-[1px]  border-black');
        
        this.insert(field, label);
        this.insert(container, line);
        this.insert(field, container);
        
        const targetElement = this.el.nativeElement.querySelector('#' + this.currentSelector);
        this.insert(targetElement, field);
        
      }
    },
    {
      name: 'Checkbox',
      icon: 'bx bxs-check-square',
      function: ()=>{
        const vertical = true;
        const count = 2;
        if(!this.isContainer()) return;
        this.counters.textfield += 1 ;
        const id= 'checkbox-'+this.counters.textfield.toString()
        const field = this.createFieldElement(id);
        const label = this.createElement('whitespace-nowrap mr-2');
        this.setValue(label, 'Label:');
        const container = this.createElement('w-full h-full px-2 flex justify-between ');
        if(vertical){
          this.removeClass(field,'items-center')
          this.addClass(label, 'mt-3');
          this.addClass(container, 'flex-col');
        }
        this.insert(field, label);
        for(let i = 0; i < count; i++){
          const single = this.createElement('flex flex-1 items-center align-center ')
          if(vertical){
            this.addClass(single, 'mt-1');
          }
          const box = this.createElement('w-7 h-7  border-solid border-[1px] border-black');
          const option = this.createElement('ml-2 whitespace-nowrap');
          this.setValue(option, 'Option');
          this.insert(single, box);
          this.insert(single, option);
          this.insert(container, single);
        }
        this.insert(field, container);
        const targetElement = this.el.nativeElement.querySelector('#' + this.currentSelector);
        this.insert(targetElement, field);
        
      }
    },
    {
      name: 'Farm Table',
      icon: 'bx bx-table',
      function: ()=>{
        if(!this.isContainer()) return;
        const targetElement = this.el.nativeElement.querySelector('#' + this.currentSelector);
        this.counters.farmtable += 1 ;
        const id= 'farmtable-'+this.counters.farmtable.toString()
        const field = this.createFieldElement(id);
        const table = this.createFieldTable();
        this.insert(field,table);
        
        this.insert(targetElement, field);
      }
    },
    {
      name: 'Farm Table Entry',
      icon: 'bx bx-message-square-add',
      function: ()=>{
        if(!this.isContainer()) return;
      }
    },
    {
      name: 'Image Field',
      icon: 'bx bx-image-alt',
      function: ()=>{
        if(!this.isContainer()) return;
        this.counters.imagefield += 1 ;
        const id= 'imagefield-'+this.counters.imagefield.toString()
        const field = this.createFieldElement(id);
        this.addClass(field, 'justify-center');
        this.addClass(field, 'items-center');
        this.addClass(field, 'flex-col');
        const container = this.createElement('w-36 h-36 border-solid border-[1px] flex flex-col justify-center items-center p-5  border-black');
        const text = this.createElement('!leading-4 text-center');
        this.setValue(text, 'ID picture taken within the last  6 months');
        this.insert(container,text);
        const text2 = this.createElement('!leading-4 text-center');
        this.setValue(text2, '( 2 X 2 )');
        this.insert(container,text2);
        const label = this.createElement('mt-2 whitespace-nowrap');
        this.setValue(label, 'PHOTO');
        this.insert(field, container);
        this.insert(field, label);
        const targetElement = this.el.nativeElement.querySelector('#' + this.currentSelector);
        this.insert(targetElement, field);
      }
    },
    {
      name: 'Signature Field',
      icon: 'bx bxs-pen',
      function: ()=>{
        if(!this.isContainer()) return;
        this.counters.imagefield += 1 ;
        const id= 'imagefield-'+this.counters.imagefield.toString()
        const field = this.createFieldElement(id);
        this.addClass(field, 'justify-center');
        this.addClass(field, 'items-center');
        this.addClass(field, 'flex-col');
        const container = this.createElement('w-48 h-8 border-b-solid border-b-[1px] flex flex-col justify-center items-center border-black');
        const label = this.createElement('mt-2 whitespace-nowrap');
        this.setValue(label, 'SIGNATURE OVER PRINTED NAME');
        this.insert(field, container);
        this.insert(field, label);
        const targetElement = this.el.nativeElement.querySelector('#' + this.currentSelector);
        this.insert(targetElement, field);
      }
    },
    // DIVIDER
    {
      name:'',
      icon:'',
      function: ()=>{
        if(!this.isContainer()) return;
      }
    },
    // DIVIDER
    {
      name: 'Group',
      icon: 'bx bx-grid-alt',
      function: ()=>{
        if(!this.isContainer()) return;
        this.counters.group += 1 ;
        const id= 'group-'+this.counters.group.toString()
        const field = this.createFieldElement(id);
        this.addClass(field,'container');
        const container = this.createElement('border-[1px] border-solid w-full border-black min-h-36 p-1');
        this.renderer.removeClass(container,'pointer-events-none');
        this.renderer.listen(container, 'click', (event) => this.select(event));
        this.insert(field, container)
        const targetElement = this.el.nativeElement.querySelector('#' + this.currentSelector);
        this.insert(targetElement, field);
      }
    },
    {
      name: 'Row',
      icon: 'bx bx-dock-top',
      function: ()=>{
        if(!this.isContainer()) return;
        this.counters.row += 1 ;
        const id= 'row-'+this.counters.row.toString()
        const field = this.createFieldElement(id);
        this.removeClass(field, 'items-center');
        const count = 2;
        for(let i = 0; i < count; i++){
          const container = this.createFieldElement(id+'-'+i.toString());
          this.removeClass(container, 'justify-center');
          this.addClass(container,'container');
          this.addClass(container,'flex-col');
          this.addClass(container,'!py-0');
          this.insert(field, container);
        }
        
        const targetElement = this.el.nativeElement.querySelector('#' + this.currentSelector);
        this.insert(targetElement, field);
      }
    },
    {
      name: 'Column',
      icon: 'bx bx-dock-left',
      function: ()=>{
        if(!this.isContainer()) return;
        this.counters.column += 1 ;
        const id= 'column-'+this.counters.column.toString()
        const field = this.createFieldElement(id);
        this.addClass(field, 'flex-col');
        const count = 2;
        for(let i = 0; i < count; i++){
          const container = this.createFieldElement(id+'-'+i.toString());
          this.addClass(container,'container');
          this.addClass(container,'flex-col');
          this.addClass(container,'!py-0');
          this.insert(field, container);
        }
        
        const targetElement = this.el.nativeElement.querySelector('#' + this.currentSelector);
        this.insert(targetElement, field);
      }
    },
    {
      name: 'Divider',
      icon: 'bx bx-minus',
      function: ()=>{
        if(!this.isContainer()) return;
        this.counters.divider += 1 ;
        const id= 'divider-'+this.counters.divider.toString()
        const field = this.createFieldElement(id);
        this.renderer.removeClass(field, 'min-h-6');
        const line = this.createElement('w-full h-[1px] bg-black');
        this.insert(field,line)
        const targetElement = this.el.nativeElement.querySelector('#' + this.currentSelector);
        this.insert(targetElement, field);


        // document.querySelector('#'+ this.currentSelector)!.insertAdjacentHTML('beforeend', `
        // <div class="selection select-none cursor-pointer w-full hover:bg-gray-50 py-0
        //   border-dotted border-2 border-sky-200 h-auto hover:border-blue-600 flex rounded justify-center items-center text-black">
        //   <div class='w-full h-[1px] bg-black'></div>
        // </div>`);
      }
    },
  ];

  createFieldElement(id:string){
    const div = this.renderer.createElement('div');
    this.renderer.setProperty(div, 'id', id);
    this.renderer.setProperty(div, 'innerText', '');
    this.renderer.setAttribute(div,'class', 'selection min-h-6 select-none bg-white cursor-pointer w-full hover:bg-gray-50 py-0 border-dotted border-2 border-sky-200 hover:border-blue-600 flex rounded justify-center items-center text-black');
    this.renderer.listen(div, 'click', (event) => this.select(event));
    return div;
  }

  createFieldTable(){
    const table = this.renderer.createElement('table');
    this.renderer.setAttribute(table, 'class',' w-full min-h-6 border-collapse border border-black border-1')
    const head = this.renderer.createElement('thead');
    const row1 = this.createFieldRow();
    this.insert(head,row1);
    const body = this.renderer.createElement('tbody');
    const row2 = this.createFieldRow();
    this.insert(body,row2);
    this.insert(table, head);
    this.insert(table, body);
    return table;
  }
  createFieldRow(){
    const tr = this.renderer.createElement('tr');
    for(let i = 0; i < 3; i++){
      const td = this.renderer.createElement('td');
      this.renderer.setAttribute(td, 'class', 'p-0 border border-black border-1');
      const div = this.renderer.createElement('div');
      this.renderer.setAttribute(div, 'class','min-h-6 container');
      this.insert(td, div);
      this.insert(tr, td);
    }
    return tr;
  }

  createElement(style:string){
    const div = this.renderer.createElement('div');
    this.renderer.setAttribute(div,'class','pointer-events-none ' + style );
    return div;
  }
  
  currentHas(key:string){
    if(this.currentSelector.includes(key))  return true;
    return false;
  }

  setValue(target:any,value:string){
    this.renderer.setProperty(target, 'innerText', value);
  }

  insert(target:any, src:any){
    if(target.id.includes('group') && target.querySelector('div') != null){
      this.renderer.appendChild(target.querySelector('div'),src);
    }else{
      this.renderer.appendChild(target,src);
    }
  }

  addClass(target:any, cls:string){
    this.renderer.addClass(target,cls);
  }

  removeClass(target:any, cls:string){
    this.renderer.removeClass(target,cls);
  }
  isContainer(){
    if(this.el.nativeElement.querySelector('#' + this.currentSelector).classList.contains('container')) return true;
    return false;
  }

  toolkey(name:string){
    return name.replaceAll(" ", '').toLowerCase();
  }
  

  select(event:any){
    const selected = this.el.nativeElement.querySelector('.selected');
    if(selected){
      selected.classList.remove('selected');
    }
    var target = (event.target) as HTMLElement ;
    if(target.classList.contains('selection')) 
      target.classList.add('selected');
    if(target.id==''){
      target.parentElement!.classList.add('selected');
      this.currentSelector = target.parentElement!.id;
    }else{
      this.currentSelector =  target.id;
    }
  }
  

  constructor(private renderer:Renderer2, private el: ElementRef,) { }

}
