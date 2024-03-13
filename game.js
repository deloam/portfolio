var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");

var player = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 10,
    speed: 2,
    acceleration: 0.1,
    maxSpeed: 4
};

var items = [];
var enemies = [];
var score = 0;
var gameOver = false;
var gameStarted = false;
var enemyColors = ["red", "orange", "maroon", "purple", "yellow"];
var enemyColorIndex = 0;

function drawPlayer() {
    ctx.beginPath();
    ctx.arc(player.x, player.y, player.radius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function drawItems() {
    items.forEach(function (item) {
        ctx.beginPath();
        ctx.arc(item.x, item.y, item.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#00FF00";
        ctx.fill();
        ctx.closePath();
    });
}

function drawEnemies() {
    enemies.forEach(function (enemy) {
        ctx.beginPath();
        ctx.arc(enemy.x, enemy.y, enemy.radius, 0, Math.PI * 2);
        ctx.fillStyle = enemy.color;
        ctx.fill();
        ctx.closePath();
    });
}

function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#fff";
    ctx.fillText("Pontuação: " + score, 8, 20);
}

function checkCollision(object1, object2) {
    var distance = Math.sqrt(Math.pow(object1.x - object2.x, 2) + Math.pow(object1.y - object2.y, 2));
    return distance < object1.radius + object2.radius;
}

function update() {
    if (!gameOver && gameStarted) {
        // Move o jogador suavemente
        if (keys.a || keys.ArrowLeft) {
            player.x -= player.speed;
        }
        if (keys.d || keys.ArrowRight) {
            player.x += player.speed;
        }
        if (keys.w || keys.ArrowUp) {
            player.y -= player.speed;
        }
        if (keys.s || keys.ArrowDown) {
            player.y += player.speed;
        }

        // Limita o jogador dentro dos limites do canvas
        player.x = Math.max(player.radius, Math.min(canvas.width - player.radius, player.x));
        player.y = Math.max(player.radius, Math.min(canvas.height - player.radius, player.y));

        // Verifica colisão com itens
        items.forEach(function (item, index) {
            if (checkCollision(player, item)) {
                items.splice(index, 1);
                score++;
                spawnNewItem();
                if (score % 10 === 0) {
                    changeEnemyColor();
                }
                spawnNewEnemy();
                if (score % 10 === 0) {
                    player.maxSpeed *= 1.05; // Aumenta a velocidade do jogador
                }
            }
        });

        // Movimenta os inimigos
        enemies.forEach(function (enemy) {
            if (enemy.direction === "horizontal") {
                enemy.x += enemy.speed;
                if (enemy.x < 0 || enemy.x > canvas.width) {
                    enemy.speed *= -1;
                }
            } else {
                enemy.y += enemy.speed;
                if (enemy.y < 0 || enemy.y > canvas.height) {
                    enemy.speed *= -1;
                }
            }
            if (checkCollision(player, enemy)) {
                endGame();
            }
        });
    }

    // Limpa o canvas e desenha os objetos
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer();
    drawItems();
    drawEnemies();
    drawScore();

    // Continua o loop de atualização
    requestAnimationFrame(update);
}

function spawnNewItem() {
    var newItem = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: 5
    };
   // console.log("speed ||  maxspeed || aceleracao");
   // console.log(player.speed,player.maxSpeed, player.acceleration);
    items.push(newItem);
}

function spawnNewEnemy() {
    var newEnemy = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: 8,
        speed: 1,
        direction: Math.random() < 0.5 ? "horizontal" : "vertical",
        color: enemyColors[enemyColorIndex]
    };
    enemies.push(newEnemy);
}

function changeEnemyColor() {
    enemyColorIndex = (enemyColorIndex + 1) % enemyColors.length;
}

function endGame() {
    gameOver = true;
    document.getElementById("gameOverScreen").style.display = "block";
}

function restartGame() {
    gameOver = false;
    items = [];
    enemies = [];
    score = 0;
    player.x = canvas.width / 2;
    player.y = canvas.height / 2;
    player.speed = 2;
    player.acceleration = 0.1;
    player.maxSpeed = 4;

    //gameStarted = false;
    enemyColorIndex = 0;
    document.getElementById("gameOverScreen").style.display = "none";
    spawnNewItem();
    spawnNewEnemy();
    //update();
}

function startGame() {
    gameStarted = true;
    document.getElementById("startButton").style.display = "none";
}

var keys = {};

document.addEventListener("keydown", function (event) {
    keys[event.key] = true;
});

document.addEventListener("keyup", function (event) {
    keys[event.key] = false;
});

spawnNewItem();
spawnNewEnemy();
update();
