<html>
	<head>
		<title>Działkowicz</title>
		<link rel="Stylesheet" type="text/css" href="stylesheet.css"/>
		<meta charset="utf-8">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
		<script src="farm.js"></script>
		<link href="https://fonts.googleapis.com/css?family=Amatic+SC&subset=latin-ext" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css?family=Just+Another+Hand&subset=latin-ext" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
	</head>
	
	<body>
	
		<div class="alert">
			<div class="alert-header">Czy na pewno chcesz usunąć?<button class="closealert" onClick="closeAlert()">X</button></div>
			<div class="alert-body"><a class="alertmessage">Koszt usunięcia x wynosi</a> <button class="acceptalert" onClick="acceptAlert()">Tak</button><button class="refusealert" onClick="closeAlert()">Nie</button></div>
		</div>
		
		<div class="plant-desc">
			<div class="plant-desc-content">
				<a class="plant-desc-name"></a><br>
				<b>Czas:</b> <a class="plant-desc-days"></a> dni<br>
				<b>Liczba plonów:</b> <a class="plant-desc-harvest"></a><br>
				<b>Liczba punktów:</b> <a class="plant-desc-points"></a>
			</div>
		</div>
		
		<div class="cell-desc">
			<div class="cell-desc-content">
				<a class="cell-desc-name"></a><br>
				<b>Pozostały czas:</b> <a class="cell-desc-days"></a> dni<br>
				<b>Liczba plonów:</b> <a class="cell-desc-harvest"></a><br>
				<a class="cell-desc-watered"></a>
			</div>
		</div>
		
		<div class="shop">
			<div class="shop-header">
				<span class="shop-title">RYNECZEK</span>
				<button class="close-the-shop">✘</button>
			</div>
			<div class="shop-wrapper">
				<div class="shop-menu">
				
					<div class="shop-key">
						<div class="left">ROŚLINA</div>
						<div class="middle">CENA</div>
						<div class="right">ILOŚĆ</div>
					</div>
					
					<div class="shop-menu-items">
					</div>
					
				</div>
				
				<div class="cart">
					<div class="shop-key"><div class="middle">KOSZYK</div></div>
					<div class="cart-list">
					</div>
					<div class="shop-buy">
						<div class="left">
							RAZEM: <a class="final-price">0,00</a> cB
						</div>
						<div class="right">
							<button class="shop-reset">RESET</button>
							<button class="shop-purchase">KUP</button>
						</div>
					</div>
				</div>
				
			</div>
		</div>
		<div class="wrapper">
			<div class="header">
				<div class="header-left">
					<div class="gametitle"><a href="#">Działkowicz</a></div>
				</div>
				<div class="header-right">
					<div class="header-buttons-left">
						<button class="nextday" onClick="nextDay()">NASTĘPNY DZIEŃ</button><br>
						<button class="open-the-shop">RYNECZEK</button><br>
						<button class="savegame" onClick="gameSave()">ZAPISZ</button>
					</div>
					<div class="header-buttons-right">
						<button class="automatic-watering">PODLEJ WSZYSTKIE<br>(0,01 cB/poletko)</button>
						<button class="automatic-harvesting">ZBIERZ WSZYSTKIE<br>(0,01 cB/poletko)</button>
					</div>
					<div class="info">
						<span class="info-verse">Gotówka: <a class="yourmoney">1,00 cB</a></span><br>
						<span class="info-verse">Punkty: <a class="yourpoints">0</a></span><br>
						<span class="info-verse">Poziom: <a class="yourlevel">1</a> <a class="level-title">Marchewa Stasia</a></span>
					</div>
				</div>
			</div>
			<div class="game">
				<div class="left-menu">
					<div class="left-menu-header">
						<div class="left-menu-header-option left-menu-option" data-tool="harvest"><span class="plant-name">ZBIERZ</span></div>
						<div class="left-menu-header-option left-menu-option" data-tool="water"><span class="plant-name">PODLEJ</span></div>
					</div>
					<div class="left-menu-items">
					</div>
				</div>
				<div class="field">
					<?php
					$number = 1;
					for($i = 1; $i <= 12; $i++)
					{
						echo '<div class="row">';
						for($k = 1; $k <= 17; $k++)
						{
							echo '<div class="cell" id="cellnumber'.$number.'" data-cellnumber="'.$number.'"><div class="darkening" id="light"><a class="days-left"></a></div></div>';
							$number++;
						}
						echo '</div>';
					}
					?>
				</div>
			</div>
			<div class="offers">
				<div class="client" data-client="1"></div>
				<div class="client" data-client="2"></div>
				<div class="client" data-client="3"></div>
				<div class="client" data-client="4"></div>
			</div>
			<script src="farm.js"></script>
		</div>
	</body>
</html>