

//Set the max height of the collumns
let b = 130;

// Set the position of the graphic and diameter of the circle
let x = 320;
let y = 390;
let diam = 300;


//Set the through the years graph

let pos_graph_x = 999;
let pos_graph_y = 140;
let rer_x=340;
let rer_y=220;

//Set the physical harm graph
let pontox=1170;
let pontoy= 560;

let diametro= 200;

//Set the position of the 1 key 
let key_x = 650; 
let key_y = 360;

//Set the position of the 2 key, and size
let key_2x = key_x; 
let key_2y = key_y + 100;
let tam_x=170, tam_y=180;

//rectangle set
let retc_x= 0 ;
let retc_y= 0 ;

let retc__x= 420;
let retc__y= 640;

//dependence set
let dep_x= 1030;
let dep_y= 470;

let bar_total=300 +50/2 ;
let bar_alt= 120 +50/2;

let small_bar_alt= bar_alt/5;


//set the strokes
let stroke_text = 150;
let stroke_title= 0;
let stroke_subtitle=255;

//strokeWeigth def
let weit_normal= 1 ;
let weit_2= 3 ;


// Change the colors of the collumns
var coresBarras= [];
coresBarras[0]= [40,166,27];
coresBarras[1]= [240, 229, 31];
//beta equals the color differrence between one collumn
let beta =30;

// Change the colors of the slices
var cores= [];
for(var i = 0; i < 5; i++){
  cores[i]= [173, 134, 69];
}

//Backgorund color
let cor_back=[];
cor_back=[194,231,255];//255, 231,193

//Subtitle colors
let cor_sub= [95-20 , 71-20 ,32-20];//98,75,35];//[11,26,122];

//Text color
let cores_text= [117, 80, 21];


//cores do drug dependence
let cor_phy=[190 , 144, 64];
let cor_psy=[206 , 143, 40];
let cor_mean=[95 , 71,32];
let cor_plea=[124,89,25];

// cores do physical harm
let coorreess=[];
coorreess[0]=[190, 144,64];
coorreess[1]=[206, 143,40];
coorreess[2]=[124,  89,25];
coorreess[3]=[190, 140, 4];
coorreess[4]=[95 , 71 ,32];



//colors of slices when mouse on top
var cores_1= [];
cores_1[0] = [cores[0][0] , cores[0][1], cores[0][2]];
cores_1[1] = [cores[1][0] , cores[1][1], cores[1][2]];
cores_1[2] = [cores[2][0] , cores[2][1], cores[2][2]];
cores_1[3] = [cores[3][0] , cores[3][1], cores[3][2]];
cores_1[4] = [cores[4][0] , cores[4][1], cores[4][2]];

change= -30;
var cores_top= [];
cores_top[0] = [cores_1[0][0] + change, cores_1[0][1]+ change, cores_1[0][2]+ change];
cores_top[1] = [cores_1[1][0] + change, cores_1[1][1]+ change, cores_1[1][2]+ change];
cores_top[2] = [cores_1[2][0] + change, cores_1[2][1]+ change, cores_1[2][2]+ change];
cores_top[3] = [cores_1[3][0] + change, cores_1[3][1]+ change, cores_1[3][2]+ change];
cores_top[4] = [cores_1[4][0] + change, cores_1[4][1]+ change, cores_1[4][2]+ change];

// Change the color of the slices after they're pressed
let click_cor = [cores_1[0][0]-80,cores_1[0][1]-80,cores_1[0][2]-80 ];//[135,98,36]

//Define the text Font
let font_text= 'Helvetica';

// Change the setences and words that appear
let names= [];
let title="DRUGS AND THE TRAIL THEY LEAVE";
let phy__harm="Physical Harm";
let incre_frase = "Increase of: "
let textdepen= "Drug Dependence"
let legenda_phy = "Physical"
let legenda_psy = "Psychological"
let legenda_mean = "Mean"
let legenda_plea= "Pleasure";
//******************************----Values = 0----****************************************
var data = []; 
for(var i= 0; i < 5; i++){
  data[i]=[];
}
let phy_harm=[];
let numeros= [];
let years = [];
let DEP_physical=[];
let DEP_psychological=[];
let DEP_plea=[];
let UpX = [] , UpY=[] , DownX=[] , DownY=[];
let i0= cores[0], i1=cores[1], i2=cores[2], i3=cores[3],i4=cores[4];
var numbers = [];
var newNumbers = [];
let centerText = "";
let text1="";
let text2="";
let text3="";
let text4="";
let text_inc0= "";
let text_inc1= "";
let text_depen="";
let leg_psy="";
let leg_phy="";
let leg_mean="";
let leg_plea="";
let button=0;
let hit=[];
let barra_valor_physical= 0;
let barra_valor_psychological= 0;
let barra_valor_mean= 0;
let barra_valor_plea=0;
let small_barra_alt = 0;
let barra_total= 0;
let barra_alt= 0;
let dep_0= "";
let dep_1= "";
let dep_2= "";
let dep_3= "";
let sli= [];
let sec_title, frase1,frase2,frase3,frase4;
let wid;
let a=[], b1=[];
//*************************************************

let Over = false;

let DEP_mean=[];
for(let i=0;i<5;i++){
  DEP_mean[i]= mean(DEP_physical[i], DEP_psychological[i], DEP_plea[i]);
}

var im1, im2, im3, im4, im5, im_title,im_ground, myFont, info, info2, info3;
function preload(){
  im1= loadImage("images/alcohol.png");
  im2= loadImage("images/tobacco.png");
  im3= loadImage("images/cocaine.png");
  im4= loadImage("images/opioids.png");
  im5= loadImage("images/cannabis.png");
  im_title= loadImage("images/TITLE_new.png");
  im_ground=loadImage("images/ground_final.png");
  myFont = loadFont('assets/Wkwkwk.ttf');
  info = loadJSON("JSON/consumers-overdoses-each-drug.json");
  info2 =loadJSON("JSON/drug_data.json");
  info3 =loadJSON("JSON/total_of_overdoses.json");
}
 
//****** Main Functions *******
//_________________________________________________________________________________
function setup() {
  createCanvas(1500, 800);
  angleMode(DEGREES);
  frameRate(4000);
  wid=width;
  for(let i = 0; i< 5 ; i++){
    sli[i]= new circles(x,y,diam);
  }
  jsonToArray();
  values();
}

function draw() {
  background(cor_back[0], cor_back[1], cor_back[2]);
  smooth();
  for(let i = 0; i < 5; i++){
    sli[i].createLines(i);
    fill(cores[i][0],cores[i][1],cores[i][2]);
    stroke(stroke_title);
    strokeWeight(weit_normal);
    sli[i].show(a[i],b1[i]);
    sli[i].detectOver(i);
 }
  imagens();
  
  input_in_draw();


}
//____________________________________________________________________________________
function mousePressed (){
  for(let i = 0; i < 5; i++){
  sli[i].clicked(mouseX, mouseY, i);
  }
  
}
class circles {

   constructor(posX, posY, diam) {

   this.x = posX;
   this.y = posY;
   this.diam = diam;
  }
  show(a,b){
    arc(this.x, this.y, this.diam,this.diam,a,b,PIE);
  }
   detectOver(k){
     if( mouseX < UpX[k] && mouseX > DownX[k] && mouseY < UpY[k] && mouseY > DownY[k] ){
       Over =true;

     }else {
       Over = false;

     }
  changeColor(k);
   }
 createLines(j) {
    var x1=[], y1=[], x2=[], y2=[];
    
      for (var i = 1; i < 9; i++) {

       x1[i] = this.x + (this.diam / 2 + newNumbers[j][i - 1]) * cos(90 - 8 * i + 72 * j);
       y1[i]= this.y + (this.diam / 2 + newNumbers[j][i - 1]) * -sin(90 - 8 * i + 72 * j);
       x2[i] = this.x + (this.diam / 2) * cos(90 - 8 * i + 72 * j);
       y2[i]= this.y + (this.diam / 2) * -sin(90 - 8 * i + 72 * j);  
       }

       stroke(0);
       strokeWeight(weit_normal);
      fill(coresBarras[0][0],coresBarras[0][1],coresBarras[0][2]);
      beginShape();
        vertex(x2[2], y2[2]);
        vertex(x2[1], y2[1]);
        vertex(x1[1], y1[1]);
        vertex(x1[2], y1[2]);
      endShape();
      beginShape();
        vertex(x2[3], y2[3]);
        vertex(x2[4], y2[4]);
        vertex(x1[4], y1[4]);
        vertex(x1[3], y1[3]);
      endShape();
      strokeWeight(2);
      line(x1[2],y1[2],x1[3],y1[3]);
      fill(coresBarras[0][0]-beta,coresBarras[0][1]-beta,coresBarras[0][2]-beta);
      noStroke();
       beginShape();
        vertex(x2[2], y2[2]);
        vertex(x2[3], y2[3]);
        vertex(x1[3], y1[3]);
        vertex(x1[2], y1[2]);
      endShape();
      

      stroke(0);
      strokeWeight(weit_normal);
      fill(coresBarras[1][0],coresBarras[1][1],coresBarras[1][2]);
      beginShape();
        vertex(x2[6], y2[6]);
        vertex(x2[5], y2[5]);
        vertex(x1[5], y1[5]);
        vertex(x1[6], y1[6]);        
      endShape();
     beginShape();
        vertex(x2[7], y2[7]);
        vertex(x2[8], y2[8]);
        vertex(x1[8], y1[8]);
        vertex(x1[7], y1[7]);
      endShape();
      strokeWeight(2);
      line(x1[6],y1[6],x1[7],y1[7]);
      fill(coresBarras[1][0]-beta,coresBarras[1][1]-beta,coresBarras[1][2]-beta);
      noStroke();
      beginShape();
        vertex(x2[6], y2[6]);
        vertex(x1[6], y1[6]);
        vertex(x1[7], y1[7]);
        vertex(x2[7], y2[7]);
      endShape();
      }
   
  // Function that let the text became visible when the images are cliked
  clicked(posx, posy,k){
    var distance = dist(posx, posy, this.x, this.y);
    if(distance < this.diam/2){
      for( var i = 0 ; i < 5; i++){        
        UpX[i]= x + ((this.diam / 2)*5/8) * cos(90 - 36 + 72 * i)   +   dimensao /2;
        UpY[i]= y + ((this.diam / 2)*5/8) * -sin(90 - 36 + 72 * i)  +   dimensao /2;
        DownX[i]= x + ((this.diam / 2)*5/8) * cos(90 - 36 + 72 * i) -   dimensao /2;
        DownY[i]= y + ((this.diam / 2)*5/8) * -sin(90 - 36 + 72 * i)-   dimensao /2;
       }
      if(posx < UpX[k] && posx > DownX[k] && posy < UpY[k] && posy > DownY[k] ){
       centerText = names[k];
       cores[k]= [click_cor[0], click_cor[1], click_cor[2]];
       text1= frase1+ data[k][0];
       text2= frase2+ data[k][1];
       text3= frase3+ data[k][2]
       text4= frase4+ data[k][3];
       text_inc0= incre_frase + percent_increase(data[k][0],data[k][1]) + " %";
       text_inc1= incre_frase + percent_increase(data[k][2],data[k][3]) + " %";
       text_depen= textdepen; dep_0= "0"; dep_1= "1";dep_2= "2";dep_3= "3";
       barra_total= bar_total;barra_alt=bar_alt;small_barra_alt=small_bar_alt;
       barra_valor_physical= dependece_converter(DEP_physical[k]);barra_valor_psychological= dependece_converter(DEP_psychological[k]);
       barra_valor_mean=dependece_converter(DEP_mean[k]); barra_valor_plea= dependece_converter(DEP_plea[k]);
       leg_phy=legenda_phy;leg_psy=legenda_psy;leg_mean=legenda_mean; leg_plea= legenda_plea;
       retc_x=retc__x; retc_y=retc__y; button=1;
       rect1 = 0;rect2 = 0;rect3 = 0;rect4 = 0;
       }
     }else{
       centerText="";
       text1="";text2="";text3="";text4=""; text_inc0=""; text_inc1="";
       text_depen="";barra_total= 0;barra_alt=0;
       dep_0= ""; dep_1= "";dep_2= "";dep_3= "";small_barra_alt=0;
       barra_valor_mean=0;barra_valor_physical=0;barra_valor_psychological=0;
       leg_phy="";leg_psy="";leg_mean=""; barra_valor_plea=0;
       leg_plea= "";retc_x=0; retc_y=0; button=0; 
       cores[1]=i1; cores[2]=i2;cores[3]=i3;cores[4]=i4;
       }
   }
 }
// Function to put the data into another 2D array to implement in the graphic and
// to calculate the mean in the dependence graph and
// calculate the angles of the main graph
 function values(){
  for (var h = 0; h < 5; h++) {
    numbers[h] = [];
    for (var t = 0; t < 4; t++) {
      numbers[h][t * 2] = data[h][t];
      numbers[h][t * 2 + 1] = data[h][t];
    }
  }
  var z=[];
  z = [numbers[0][0],numbers[1][0],numbers[2][0],numbers[3][0],numbers[4][0]];
  for (var m = 0; m < 5; m++) {
    for (var i = 0; i < 8; i++) {
      if (numbers[m][i] > z[m]) {
        z[m] = numbers[m][i];
      }
    }
  }
  for (var n = 0; n < 5; n++) {
    newNumbers[n] = [];
    for (var j = 0; j < 8; j++) {
      newNumbers[n][j] = (numbers[n][j] * b) / z[n];
    }
  }
  for(let i=0;i<5;i++){
    DEP_mean[i]= mean(DEP_physical[i], DEP_psychological[i], DEP_plea[i]);
  }
  for (var i = 0; i < 5; i++) {
    a[i] = - 90 - 72*i ;
    b1[i] = -18  - 72*i;
  }
}
let dimensao;
//Function that puts the images inside the circle and in the correct dimension
function imagens(){
  for ( var i = 0; i< 5 ; i++){

    var m, n;
    m = x + ((diam / 2)*5/8) * cos(90 - 36 + 72 * i);
    n = y + ((diam / 2)*5/8) * -sin(90 - 36 + 72 * i);
    dimensao = diam / 2.75;
    if (i == 0){
     imageMode(CENTER);
     image(im1, m,n,dimensao,dimensao);
     }
    if (i == 1){
     imageMode(CENTER);
     image(im2, m,n,dimensao,dimensao);
     }
    if (i == 2){
     imageMode(CENTER);
     image(im3, m,n,dimensao,dimensao);
     }
    if (i == 3){
     imageMode(CENTER);
     image(im4, m,n,dimensao,dimensao);
     }
    if (i == 4){
     imageMode(CENTER);
     image(im5, m,n,dimensao,dimensao);
     }
   }
 }
//Function that calculates the percentage of increase or descrease of 2 numbers
function percent_increase(number1, number2){
  var result, diference;
  diference= number2 - number1;
  result = (diference * 100) / number1;
  result = round(result);
  if (diference== 0){
    result=0;
  }
  return result;
}
// Function that draws the 1 key 
function key_one(key_x,key_y){
  textSize(15);
  textFont(font_text);
  fill(2);
  stroke(1);
  strokeWeight(weit_normal);
  text("Key 1", key_x+10, key_y +20);
  stroke(stroke_title);
  noFill();
  rect(key_x, key_y, 170,100);

  fill(coresBarras[0][0],coresBarras[0][1],coresBarras[0][2]);
  beginShape();
   vertex(key_x+20 +30+20, key_y+50+20);
   vertex(key_x+20 +30, key_y+50+20);
   vertex(key_x+20 +30, key_y+50);
   vertex(key_x+20 +30+20, key_y+50);
  endShape();
  beginShape();
   vertex(key_x+60 +30, key_y+30);
   vertex(key_x+60 +30+20, key_y+30);
   vertex(key_x+60 +30+20, key_y+30+40);
   vertex(key_x+60 +30, key_y+30+40);
  endShape(); 
  fill(coresBarras[0][0]-beta,coresBarras[0][1]-beta,coresBarras[0][2]-beta);
  beginShape();
   vertex(key_x+20 +30+20, key_y+50+20);
   vertex(key_x+20 +30+20, key_y+50);
   vertex(key_x+60 +30, key_y+30);
   vertex(key_x+60 +30, key_y+30+40);
  endShape(CLOSE);

  stroke(stroke_text);
  strokeWeight(weit_normal);
  fill(2);
  text(years[0],key_x +10 +30 , key_y+90 );
  text(years[years.length-1],key_x +60 + 30, key_y+90  );
}
//Function that creates the drug dependence part
function dependece_graph(dep_x, dep_y){
 
  textSize(25);
  fill(cor_sub[0],cor_sub[1], cor_sub[2]);
  stroke(stroke_subtitle);
  textFont(myFont);
  text(text_depen, 1050, 430);

  stroke(stroke_title);
  strokeWeight(1);
  strokeWeight(weit_normal);

  fill(cor_phy[0],cor_phy[1],cor_phy[2]);
  rect(dep_x, dep_y+small_barra_alt, rect1, small_barra_alt);
  
  fill(cor_psy[0],cor_psy[1],cor_psy[2]);
  rect(dep_x, dep_y+small_barra_alt*2, rect2, small_barra_alt);
  
  fill(cor_plea[0],cor_plea[1],cor_plea[2]);
  rect(dep_x, dep_y+small_barra_alt*3, rect3, small_barra_alt);

  fill(cor_mean[0],cor_mean[1],cor_mean[2]);
  rect(dep_x, dep_y+small_barra_alt*4, rect4, small_barra_alt);

  if(button == 1){
  stroke(stroke_title);
  strokeWeight(3);
  line(dep_x,dep_y + barra_alt, dep_x+ barra_total,dep_y + barra_alt );
  line(dep_x,dep_y , dep_x,dep_y + barra_alt );
  stroke(cor_back[0], cor_back[1], cor_back[2]);
  strokeWeight(3);
  line(dep_x+bar_total/3, bar_alt+ dep_y+20,dep_x+bar_total/3, dep_y   );
  line(dep_x+(bar_total*2)/3,bar_alt+ dep_y+20,dep_x+(bar_total*2)/3, dep_y );
  }

  fill(1);
  textSize(15);
  stroke(stroke_text);
  textFont(font_text);
  strokeWeight(weit_normal);
  text(dep_0,dep_x, bar_alt+ dep_y+ 20 );
  text(dep_1,dep_x+bar_total/3, bar_alt+ dep_y+20 );
  text(dep_2,dep_x+(bar_total*2)/3,bar_alt+ dep_y+20 );
  text(dep_3,dep_x+bar_total, bar_alt+ dep_y+20 );

  fill(1);
  stroke(stroke_text);
  text(leg_phy, dep_x- 60, dep_y+small_barra_alt+15 );
  text(leg_psy, dep_x-95, dep_y+small_barra_alt*2+15 );
  text(leg_mean, dep_x-40, dep_y+small_barra_alt*4+15 );
  text(leg_plea, dep_x- 63, dep_y+small_barra_alt*3+15 );
}
//Function that converts the real value into the visual value of the bars
function dependece_converter(numero){
  resultado= (numero *bar_total) /3;
  return resultado;
}
//Function that returns the mean between 3 numbers
function mean(numero1,numero2,numero3){
  resulta= (numero1+numero2+numero3)/3;
  return resulta;
}
// Function that creates the graph through the years
function time_changes_graph(ponto_x, ponto_y){

  stroke(stroke_title);
  strokeWeight(3);
  line(ponto_x, ponto_y, ponto_x, ponto_y+ rer_y);
  line(ponto_x, ponto_y+ rer_y,ponto_x+ rer_x, ponto_y+ rer_y );
  let a=[], b=[];  
  for(var i = 0; i< years.length; i++){
    strokeWeight(weit_normal);
    a[i] = (rer_x/(years.length+1)) * (i+1);
    b[i] = converterr(numeros[i]);
    fill(124,89,25);
    stroke(stroke_title);
    circle(ponto_x + a[i], (ponto_y + rer_y - (rer_y/3) ) - b[i], 10);
    fill(1);
    textSize(12);
    textFont(font_text);
    stroke(stroke_text);
    text(years[i], ponto_x + a[i] - 15, ponto_y + rer_y + 20 );
    stroke(stroke_title);
    line(ponto_x + a[i], ponto_y + rer_y - (rer_y/3) - b[i] + 5 , ponto_x + a[i] , ponto_y + rer_y );
    line(ponto_x + a[i] -5 , ponto_y + rer_y - (rer_y/3) - b[i] , ponto_x, ponto_y + rer_y - (rer_y/3) - b[i] );
    stroke(stroke_text);
    text(numeros[i], ponto_x-45, ponto_y + rer_y - (rer_y/3) - b[i] + 5);
    hit [i]=[ponto_x + a[i], (ponto_y + rer_y - (rer_y/3) ) - b[i]];
    if (i > 0){
      stroke(124,89,25);
      strokeWeight(3);
      line(hit[i][0],hit[i][1],hit[i-1][0],hit[i-1][1]);
    }
  }
}
//Function that converts the values into the visualization distance
function converterr(numero){
  let g= numeros[0] , p=g ;
  for(var i = 0; i< years.length; i++){
    if (numeros[i]> g){
      g= numeros[i];
    } else if (numeros[i]< p){
      p= numeros[i];
    }
  }
  // if (numero == p){
  //   return 0;
  //}else{
    return (numero - p) * ( rer_y /2 ) / (g-p) ;
  //}
}
//Function that draws the 2 key
function key_two(key_2x, key_2y){
  let dia=150;
  let fia= [25,25 , 40,40 , 15,15, 25,25];
  noFill();
  stroke(stroke_title);
  strokeWeight(weit_normal);
  textFont(font_text);
  rect(key_2x, key_2y, tam_x, tam_y);
  fill(1);
  stroke(1);
  text("Key 2", key_2x+10, key_2y +20);
  noFill();
  textSize(11);
  fill(1);
  stroke(stroke_text);
  text("Consumers", key_2x+10 , key_2y+50);
  text("Overdoses", key_2x+110 , key_2y+70);
  stroke(stroke_title);
  let t1= key_2x + tam_x/2;
  let t2= key_2y + (tam_y*19) /20 ;
  let x1=[],x2=[],y1=[],y2=[];
  for (var i = 1; i < 9; i++) {
    x1[i] = t1 + (dia / 2 + fia[i - 1]) *  cos(90+35 - 8 * i );
    y1[i]= t2 + (dia / 2 + fia[i - 1]) * -sin(90+35 - 8 * i );
    x2[i] = t1 + (dia / 2) *  cos(90 +35- 8 * i );
    y2[i]= t2 + (dia / 2) * -sin(90 +35 - 8 * i );
    }
   fill(coresBarras[0][0],coresBarras[0][1],coresBarras[0][2]);
   beginShape();
     vertex(x2[1], y2[1]);
     vertex(x1[1], y1[1]);
     vertex(x1[2], y1[2]);
     vertex(x1[3], y1[3]);
     vertex(x1[4], y1[4]);
     vertex(x2[4], y2[4]);
   endShape();
   fill(coresBarras[1][0],coresBarras[1][1],coresBarras[1][2]);
   beginShape();
     vertex(x2[5], y2[5]);
     vertex(x1[5], y1[5]);
     vertex(x1[6], y1[6]);
     vertex(x1[7], y1[7]);
     vertex(x1[8], y1[8]);
     vertex(x2[8], y2[8]);
   endShape();
   fill(cores_1[0][0],cores_1[0][1],cores_1[0][2]);
   arc( key_2x + tam_x/2,key_2y + (tam_y*19) /20 , dia,dia, 180+60, 180+30+90, PIE);
 }
//Function that creates the physical harm graph
 function phy_harm_graph(pontoX,pontoY ){
 let ang_soma=-90, soma_total=0,p1,p2,ang_2=0,ang_soma_2=-90, aumen=20, atm=-90;
 for(let j =0 ; j< 5; j++){
   soma_total= soma_total + phy_harm[j];
   }
 for(let i = 0; i < 5; i++){
   atm=ang_soma;
   ang= (phy_harm[i]*360)/soma_total; 
   ang_soma= ang_soma-ang;
   fill(coorreess[i][0],coorreess[i][1],coorreess[i][2]);
   stroke(stroke_title);
   strokeWeight(weit_normal);
   arc(pontoX, pontoY, diametro, diametro, ang_soma, atm, PIE);
   ang_2= ang/2;
   aumen=20;
   if(i==1){
     aumen= 45;
     }else if (i==4 || i==3){
     aumen= 5;
     }
   ang_soma_2= ang_soma_2 - ang_2;
   p1=pontoX + (diametro / 2 + aumen) *  cos(-ang_soma_2 );
   p2=pontoY + (diametro / 2 + aumen) * -sin(-ang_soma_2);
   fill(1);
   textSize(15);
   textFont(font_text);
   stroke(stroke_text);
   text(names[i],p1,p2 );
   ang_soma_2=ang_soma_2-ang_2;
   }
  fill(cor_back[0], cor_back[1], cor_back[2]);
  stroke(stroke_title);
  circle(pontoX,pontoY, diametro/3);
 }
 //Function that changes the cursor to the hand and changes the color of the cheese slices
 function cursor_change(){
  var distance = dist(mouseX, mouseY, x, y);
  if(distance < diam/2){
  for( var i = 0 ; i < 5; i++){        
    UpX[i]= x + ((diam / 2)*5/8) * cos(90 - 36 + 72 * i)   +   dimensao /2;
    UpY[i]= y + ((diam / 2)*5/8) * -sin(90 - 36 + 72 * i)  +   dimensao /2;
    DownX[i]= x + ((diam / 2)*5/8) * cos(90 - 36 + 72 * i) -   dimensao /2;
    DownY[i]= y + ((diam / 2)*5/8) * -sin(90 - 36 + 72 * i)-   dimensao /2;
   }
  cursor(HAND);
 }else{
   cursor(ARROW);
 }
}
 //Function to change the color of the slices
 function changeColor(k){
  if(Over){
    cores[k]=[cores_top[k][0],cores_top[k][1],cores_top[k][2]];
  } else{
    cores[k]=[cores_1[k][0],cores_1[k][1],cores_1[k][2]];
  }
}
//Function that creates the bars in front of the text
function createForm(coor_x, coor_y){
   if(button==1){
   noStroke();
   fill(coresBarras[0][0]-beta,coresBarras[0][1]-beta,coresBarras[0][2]-beta);
   beginShape();
     vertex(coor_x+20 , coor_y);
     vertex(coor_x+40 , coor_y-40);
     vertex(coor_x+60 , coor_y-40);
     vertex(coor_x+60 , coor_y+60);
      vertex(coor_x+20 , coor_y+60);
   endShape();
   fill(coresBarras[0][0],coresBarras[0][1],coresBarras[0][2]);
   beginShape();
     vertex(coor_x+20 , coor_y+60);
     vertex(coor_x, coor_y+60);
     vertex(coor_x, coor_y);
     vertex(coor_x+20 , coor_y);
   endShape();
   beginShape();
     vertex(coor_x+40 , coor_y-40);
     vertex(coor_x+60 , coor_y-40);
     vertex(coor_x+60 , coor_y+60);
     vertex(coor_x+40 , coor_y+60);
   endShape(); 
   let jota= 130
   fill(coresBarras[1][0]-beta,coresBarras[1][1]-beta,coresBarras[1][2]-beta);
   beginShape();
   vertex(coor_x+20 , coor_y+jota);
     vertex(coor_x+40 , coor_y-40+jota);
     vertex(coor_x+60 , coor_y-40+jota);
     vertex(coor_x+60 , coor_y+60+jota);
     vertex(coor_x+20 , coor_y+60+jota);
   endShape();
   fill(coresBarras[1][0],coresBarras[1][1],coresBarras[1][2]);
   beginShape();
   vertex(coor_x+20 , coor_y+60+jota);
   vertex(coor_x, coor_y+60+jota);
   vertex(coor_x, coor_y+jota);
   vertex(coor_x+20 , coor_y+jota);
   endShape();
   beginShape();
   vertex(coor_x+40 , coor_y-40+jota);
   vertex(coor_x+60 , coor_y-40+jota);
   vertex(coor_x+60 , coor_y+60+jota);
   vertex(coor_x+40 , coor_y+60+jota);
   endShape(); 
  }
 }
//Function that creates the ground until it show across the sreen
function show_ground(){
 for(var s = 0; s < wid; s= s + im_ground.width){
   imageMode(CORNER);
   image(im_ground, s,800-110, im_ground.width , 110 );
   }
 }
 let maior=0;
 let rect1, rect2, rect3, rect4;

//Function that writes everything apart from the principal graph
 function input_in_draw(){

  textSize(50);
  fill(80 , 59, 24);//(98,75,35);

  strokeWeight(weit_normal);
  stroke(stroke_title);

  // noFill();
  // rect(940, 70, retc__x, retc__y);
  time_changes_graph(pos_graph_x, pos_graph_y);
  phy_harm_graph(pontox, pontoy);

  sec_title= "Number of Overdoses by year ("+years[0]+"-"+years[years.length-1]+") ";
  frase1= "Number of consumers ("+years[0]+"): ";
  frase2= "Number of consumers ("+years[years.length-1]+"): ";
  frase3= "Number of overdoses ("+years[0]+"): ";
  frase4= "Number of overdoses ("+years[years.length-1]+"): "; 

  textFont(myFont);
  textSize(20);
  fill(cor_sub[0],cor_sub[1], cor_sub[2]);
  strokeWeight(weit_normal);
  stroke(stroke_subtitle);
  text(sec_title, 980, 110);
  textSize(25);
  text(phy__harm, 1070, 425);

  
  fill(cor_back[0], cor_back[1], cor_back[2]);
  noStroke();
  rect(940, 70, retc_x, retc_y);

  stroke(0);
  strokeWeight(weit_normal);
  textSize(30);
  textFont(myFont);
  fill(cor_sub[0],cor_sub[1], cor_sub[2]);
  stroke(stroke_subtitle);
  
  text(centerText, 1100, 125);
  textSize(15);
  fill(155,115,48);
  textFont(font_text);
  stroke(stroke_text);
  fill(cores_text[0],cores_text[1],cores_text[2]);
  text(text1, 1000, 175);
  text(text2, 1000, 200);
  text(text_inc0, 1000, 225);
  createForm(1300, 150);
  
  strokeWeight(weit_normal);
  stroke(stroke_text);
  textFont(font_text);
  fill(cores_text[0],cores_text[1],cores_text[2]);
  text(text3, 1000, 275);
  text(text4, 1000, 300); 
  text(text_inc1, 1000, 325);

  key_one(key_x, key_y);
  key_two(key_2x, key_2y);

  dependece_graph(dep_x, dep_y);

  cursor_change();
  
  show_ground();

  let alfa = 3.5;
  imageMode(CORNER);
  image(im_title, 440, -10, 2100/alfa,1200/alfa);

  rect1 = rect1 + 1 * (deltaTime / 3); 
  rect2 = rect2 + 1 * (deltaTime / 3);
  rect3 = rect3 + 1 * (deltaTime / 3); 
  rect4 = rect4 + 1 * (deltaTime / 3);
  if(rect1 >= barra_valor_physical){
    rect1 = barra_valor_physical;
   }
   if(rect2 >= barra_valor_psychological){
    rect2 = barra_valor_psychological;
   }
   if(rect3 >= barra_valor_plea){
    rect3 = barra_valor_plea;
   }
   if(rect4 >= barra_valor_mean){
    rect4 = barra_valor_mean;
   }
  
 }
 //Function that puts all data from JSON files into arrays
 function jsonToArray(){
  
  for(var i = 0; i < 5; i++){ 
    data[i] = [info.substance[i].consumers1, info.substance[i].consumers2, info.substance[i].overdoses1, info.substance[i].overdoses2];   
    names[i]= info.substance[i].drug;
    phy_harm[i]= info2.substance[i].physical_harm;
    DEP_physical[i]= info2.substance[i].physical;
    DEP_psychological[i]= info2.substance[i].psychological;
    DEP_plea[i]= info2.substance[i].pleasure;
    }
  for(var i= 0; i < info3.substance.length; i++){
   years[i]= info3.substance[i].year;
   numeros[i]= info3.substance[i].overdoses;
  }
 }
