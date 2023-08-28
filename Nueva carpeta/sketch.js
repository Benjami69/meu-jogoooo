var bob, bobImg
var cozinha, cozinhaCenario
var cafeteira, cafeteiraOb
var cookie, cookieOb
var chapeu, chapeuOb
var milho, milhoW
var jarra, jarraOb
var thais, thaisImg
var estantes, estantesImg
var sal, salOb
var parrot , parrotImg

function preload(){
    bobImg = loadImage("bob.png");
    cozinhaCenario = loadImage("Cozinha.avif");
    chapeuOb =  loadImage("cahpeuOb.png");
    cookieOb = loadImage("cookie.png");
    milhoW = loadImage("milho.png");
    jarraOb = loadImage("obstaculo3.png");
    thaisImg = loadImage("Thais.png");
    estantesImg = loadImage("Estante.png");
    salOb = loadImage("sal.obstaculo.png");
    parrotImg = loadImage("Parrot.png");
    cafeteiraOb = loadImage("cafeteiraOb.png")

    
}
function setup() {
    createCanvas(windowWidth,windowHeight);
    cozinha = createSprite(width/2, height/2);
    cozinha.addImage(cozinhaCenario)
    parrot = createSprite(70,35,25,25);
    parrot.addImage(parrotImg)
    bob = createSprite(35,35,40,60);
    bob.addImage(bobImg);
    cafeteira = createSprite(45,35,30,30);
    cafeteira.addImage(cafeteiraOb);
    cookie = createSprite(55,35,30,30);
    cookie.addImage(cookieOb);
    milho = createSprite(60,40,40,20)
    milho.addImage(milhoW);
    chapeu = createSprite(50,50,30,30);
    chapeu.addImage(chapeuOb);
    thais = createSprite(55,35,30,30);
    thais.addImage(thaisImg);

}

function draw() {
    background("skyblue");
    //códigos que serão executados ao longo de todo o jogo


    drawSprites();
}

