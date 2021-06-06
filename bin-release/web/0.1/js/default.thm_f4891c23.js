window.skins=window.skins||{};
                var __extends = this && this.__extends|| function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = window.generateEUI||{};
                generateEUI.paths = generateEUI.paths||{};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.start_screen":"resource/eui_skins/start_screen.exml","eui.start_button":"resource/eui_skins/start_button.exml","eui.start_button_press":"resource/eui_skins/start_button_press.exml","eui.none_screen":"resource/eui_skins/none_screen.exml","eui.game_screen":"resource/eui_skins/game_screen.exml","eui.finish":"resource/eui_skins/finish.exml","eui.new_game_button":"resource/eui_skins/new_game_button.exml","eui.filled_block":"resource/eui_skins/filled_block.exml","eui.move_block":"resource/eui_skins/move_block.exml","eui.block_0":"resource/eui_skins/block_0.exml","eui.block_1":"resource/eui_skins/block_1.exml","eui.block_2":"resource/eui_skins/block_2.exml","eui.block_3":"resource/eui_skins/block_3.exml","eui.block_4":"resource/eui_skins/block_4.exml","eui.block_5":"resource/eui_skins/block_5.exml","eui.block_0_filled":"resource/eui_skins/block_0_filled.exml","eui.block_1_filled":"resource/eui_skins/block_1_filled.exml","eui.block_2_filled":"resource/eui_skins/block_2_filled.exml","eui.block_3_filled":"resource/eui_skins/block_3_filled.exml","eui.block_4_filled":"resource/eui_skins/block_4_filled.exml","eui.block_5_filled":"resource/eui_skins/block_5_filled.exml"};generateEUI.paths['resource/eui_skins/block_0_filled.exml'] = window.skins.block_0_filled = (function (_super) {
	__extends(block_0_filled, _super);
	function block_0_filled() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 60;
		this.width = 60;
	}
	var _proto = block_0_filled.prototype;

	return block_0_filled;
})(eui.Skin);generateEUI.paths['resource/eui_skins/block_0.exml'] = window.skins.block_0 = (function (_super) {
	__extends(block_0, _super);
	function block_0() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 60;
		this.width = 60;
	}
	var _proto = block_0.prototype;

	return block_0;
})(eui.Skin);generateEUI.paths['resource/eui_skins/block_1_filled.exml'] = window.skins.block_1_filled = (function (_super) {
	__extends(block_1_filled, _super);
	function block_1_filled() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 60;
		this.width = 240;
		this.elementsContent = [this._Rect1_i(),this._Rect2_i(),this._Rect3_i(),this._Rect4_i()];
	}
	var _proto = block_1_filled.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x210085;
		t.height = 60;
		t.strokeColor = 0x000000;
		t.strokeWeight = 2.5;
		t.width = 60;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x210085;
		t.height = 60;
		t.strokeColor = 0x000000;
		t.strokeWeight = 2.5;
		t.width = 60;
		t.x = 120;
		t.y = 0;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x210085;
		t.height = 60;
		t.strokeColor = 0x000000;
		t.strokeWeight = 2.5;
		t.width = 60;
		t.x = 180;
		t.y = 0;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x210085;
		t.height = 60;
		t.strokeColor = 0x000000;
		t.strokeWeight = 2.5;
		t.width = 60;
		t.x = 60;
		t.y = 0;
		return t;
	};
	return block_1_filled;
})(eui.Skin);generateEUI.paths['resource/eui_skins/block_1.exml'] = window.skins.block_1 = (function (_super) {
	__extends(block_1, _super);
	function block_1() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 60;
		this.width = 240;
		this.elementsContent = [this._Rect1_i(),this._Rect2_i(),this._Rect3_i(),this._Rect4_i()];
	}
	var _proto = block_1.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFF0000;
		t.height = 60;
		t.strokeColor = 0x000000;
		t.strokeWeight = 2.5;
		t.width = 60;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFF0000;
		t.height = 60;
		t.strokeColor = 0x000000;
		t.strokeWeight = 2.5;
		t.width = 60;
		t.x = 120;
		t.y = 0;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFF0000;
		t.height = 60;
		t.strokeColor = 0x000000;
		t.strokeWeight = 2.5;
		t.width = 60;
		t.x = 180;
		t.y = 0;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFF0000;
		t.height = 60;
		t.strokeColor = 0x000000;
		t.strokeWeight = 2.5;
		t.width = 60;
		t.x = 60;
		t.y = 0;
		return t;
	};
	return block_1;
})(eui.Skin);generateEUI.paths['resource/eui_skins/block_2_filled.exml'] = window.skins.block_2_filled = (function (_super) {
	__extends(block_2_filled, _super);
	function block_2_filled() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 120;
		this.width = 180;
		this.elementsContent = [this._Rect1_i(),this._Rect2_i(),this._Rect3_i(),this._Rect4_i()];
	}
	var _proto = block_2_filled.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x210085;
		t.height = 60;
		t.strokeColor = 0x000000;
		t.strokeWeight = 2.5;
		t.width = 60;
		t.x = 60;
		t.y = 0;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x210085;
		t.height = 60;
		t.strokeColor = 0x000000;
		t.strokeWeight = 2.5;
		t.width = 60;
		t.x = 0;
		t.y = 60;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x210085;
		t.height = 60;
		t.strokeColor = 0x000000;
		t.strokeWeight = 2.5;
		t.width = 60;
		t.x = 60;
		t.y = 60;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x210085;
		t.height = 60;
		t.strokeColor = 0x000000;
		t.strokeWeight = 2.5;
		t.width = 60;
		t.x = 120;
		t.y = 60;
		return t;
	};
	return block_2_filled;
})(eui.Skin);generateEUI.paths['resource/eui_skins/block_2.exml'] = window.skins.block_2 = (function (_super) {
	__extends(block_2, _super);
	function block_2() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 120;
		this.width = 180;
		this.elementsContent = [this._Rect1_i(),this._Rect2_i(),this._Rect3_i(),this._Rect4_i()];
	}
	var _proto = block_2.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFF0000;
		t.height = 60;
		t.strokeColor = 0x000000;
		t.strokeWeight = 2.5;
		t.width = 60;
		t.x = 60;
		t.y = 0;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFF0000;
		t.height = 60;
		t.strokeColor = 0x000000;
		t.strokeWeight = 2.5;
		t.width = 60;
		t.x = 0;
		t.y = 60;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFF0000;
		t.height = 60;
		t.strokeColor = 0x000000;
		t.strokeWeight = 2.5;
		t.width = 60;
		t.x = 60;
		t.y = 60;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFF0000;
		t.height = 60;
		t.strokeColor = 0x000000;
		t.strokeWeight = 2.5;
		t.width = 60;
		t.x = 120;
		t.y = 60;
		return t;
	};
	return block_2;
})(eui.Skin);generateEUI.paths['resource/eui_skins/block_3_filled.exml'] = window.skins.block_3_filled = (function (_super) {
	__extends(block_3_filled, _super);
	function block_3_filled() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 120;
		this.width = 180;
		this.elementsContent = [this._Rect1_i(),this._Rect2_i(),this._Rect3_i(),this._Rect4_i()];
	}
	var _proto = block_3_filled.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x210085;
		t.height = 60;
		t.strokeColor = 0x000000;
		t.strokeWeight = 2.5;
		t.width = 60;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x210085;
		t.height = 60;
		t.strokeColor = 0x000000;
		t.strokeWeight = 2.5;
		t.width = 60;
		t.x = 0;
		t.y = 60;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x210085;
		t.height = 60;
		t.strokeColor = 0x000000;
		t.strokeWeight = 2.5;
		t.width = 60;
		t.x = 60;
		t.y = 60;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x210085;
		t.height = 60;
		t.strokeColor = 0x000000;
		t.strokeWeight = 2.5;
		t.width = 60;
		t.x = 120;
		t.y = 60;
		return t;
	};
	return block_3_filled;
})(eui.Skin);generateEUI.paths['resource/eui_skins/block_3.exml'] = window.skins.block_3 = (function (_super) {
	__extends(block_3, _super);
	function block_3() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 120;
		this.width = 180;
		this.elementsContent = [this._Rect1_i(),this._Rect2_i(),this._Rect3_i(),this._Rect4_i()];
	}
	var _proto = block_3.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFF0000;
		t.height = 60;
		t.strokeColor = 0x000000;
		t.strokeWeight = 2.5;
		t.width = 60;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFF0000;
		t.height = 60;
		t.strokeColor = 0x000000;
		t.strokeWeight = 2.5;
		t.width = 60;
		t.x = 0;
		t.y = 60;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFF0000;
		t.height = 60;
		t.strokeColor = 0x000000;
		t.strokeWeight = 2.5;
		t.width = 60;
		t.x = 60;
		t.y = 60;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFF0000;
		t.height = 60;
		t.strokeColor = 0x000000;
		t.strokeWeight = 2.5;
		t.width = 60;
		t.x = 120;
		t.y = 60;
		return t;
	};
	return block_3;
})(eui.Skin);generateEUI.paths['resource/eui_skins/block_4_filled.exml'] = window.skins.block_4_filled = (function (_super) {
	__extends(block_4_filled, _super);
	function block_4_filled() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 120;
		this.width = 180;
		this.elementsContent = [this._Rect1_i(),this._Rect2_i(),this._Rect3_i(),this._Rect4_i()];
	}
	var _proto = block_4_filled.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x210085;
		t.height = 60;
		t.strokeColor = 0x000000;
		t.strokeWeight = 2.5;
		t.width = 60;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x210085;
		t.height = 60;
		t.strokeColor = 0x000000;
		t.strokeWeight = 2.5;
		t.width = 60;
		t.x = 60;
		t.y = 0;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x210085;
		t.height = 60;
		t.strokeColor = 0x000000;
		t.strokeWeight = 2.5;
		t.width = 60;
		t.x = 120;
		t.y = 0;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x210085;
		t.height = 60;
		t.strokeColor = 0x000000;
		t.strokeWeight = 2.5;
		t.width = 60;
		t.x = 0;
		t.y = 60;
		return t;
	};
	return block_4_filled;
})(eui.Skin);generateEUI.paths['resource/eui_skins/block_4.exml'] = window.skins.block_4 = (function (_super) {
	__extends(block_4, _super);
	function block_4() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 120;
		this.width = 180;
		this.elementsContent = [this._Rect1_i(),this._Rect2_i(),this._Rect3_i(),this._Rect4_i()];
	}
	var _proto = block_4.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFF0000;
		t.height = 60;
		t.strokeColor = 0x000000;
		t.strokeWeight = 2.5;
		t.width = 60;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFF0000;
		t.height = 60;
		t.strokeColor = 0x000000;
		t.strokeWeight = 2.5;
		t.width = 60;
		t.x = 60;
		t.y = 0;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFF0000;
		t.height = 60;
		t.strokeColor = 0x000000;
		t.strokeWeight = 2.5;
		t.width = 60;
		t.x = 120;
		t.y = 0;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFF0000;
		t.height = 60;
		t.strokeColor = 0x000000;
		t.strokeWeight = 2.5;
		t.width = 60;
		t.x = 0;
		t.y = 60;
		return t;
	};
	return block_4;
})(eui.Skin);generateEUI.paths['resource/eui_skins/block_5_filled.exml'] = window.skins.block_5_filled = (function (_super) {
	__extends(block_5_filled, _super);
	function block_5_filled() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 120;
		this.width = 120;
		this.elementsContent = [this._Rect1_i(),this._Rect2_i(),this._Rect3_i(),this._Rect4_i()];
	}
	var _proto = block_5_filled.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x210085;
		t.height = 60;
		t.strokeColor = 0x000000;
		t.strokeWeight = 2.5;
		t.width = 60;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x210085;
		t.height = 60;
		t.strokeColor = 0x000000;
		t.strokeWeight = 2.5;
		t.width = 60;
		t.x = 60;
		t.y = 60;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x210085;
		t.height = 60;
		t.strokeColor = 0x000000;
		t.strokeWeight = 2.5;
		t.width = 60;
		t.x = 0;
		t.y = 60;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x210085;
		t.height = 60;
		t.strokeColor = 0x000000;
		t.strokeWeight = 2.5;
		t.width = 60;
		t.x = 60;
		t.y = 0;
		return t;
	};
	return block_5_filled;
})(eui.Skin);generateEUI.paths['resource/eui_skins/block_5.exml'] = window.skins.block_5 = (function (_super) {
	__extends(block_5, _super);
	function block_5() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 120;
		this.width = 120;
		this.elementsContent = [this._Rect1_i(),this._Rect2_i(),this._Rect3_i(),this._Rect4_i()];
	}
	var _proto = block_5.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFF0000;
		t.height = 60;
		t.strokeColor = 0x000000;
		t.strokeWeight = 2.5;
		t.width = 60;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFF0000;
		t.height = 60;
		t.strokeColor = 0x000000;
		t.strokeWeight = 2.5;
		t.width = 60;
		t.x = 60;
		t.y = 60;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFF0000;
		t.height = 60;
		t.strokeColor = 0x000000;
		t.strokeWeight = 2.5;
		t.width = 60;
		t.x = 0;
		t.y = 60;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFF0000;
		t.height = 60;
		t.strokeColor = 0x000000;
		t.strokeWeight = 2.5;
		t.width = 60;
		t.x = 60;
		t.y = 0;
		return t;
	};
	return block_5;
})(eui.Skin);generateEUI.paths['resource/eui_skins/filled_block.exml'] = window.skins.filled_block = (function (_super) {
	__extends(filled_block, _super);
	function filled_block() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 60;
		this.width = 60;
		this.elementsContent = [this._Rect1_i()];
	}
	var _proto = filled_block.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x210085;
		t.height = 60;
		t.strokeColor = 0x000000;
		t.strokeWeight = 2.5;
		t.width = 60;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return filled_block;
})(eui.Skin);generateEUI.paths['resource/eui_skins/new_game_button.exml'] = window.skins.new_game_button = (function (_super) {
	__extends(new_game_button, _super);
	function new_game_button() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 68;
		this.width = 168;
		this.elementsContent = [this._Rect1_i(),this._Label1_i()];
	}
	var _proto = new_game_button.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 68;
		t.width = 168;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "New Game";
		t.textColor = 0xFF0000;
		t.verticalCenter = 0;
		return t;
	};
	return new_game_button;
})(eui.Skin);generateEUI.paths['resource/eui_skins/finish.exml'] = window.skins.finish = (function (_super) {
	__extends(finish, _super);
	function finish() {
		_super.call(this);
		this.skinParts = ["scoreValue_finish","new_game_button"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this._Rect2_i(),this._Label1_i(),this.scoreValue_finish_i(),this.new_game_button_i()];
	}
	var _proto = finish.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.2;
		t.height = 1136;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.height = 570;
		t.width = 540;
		t.x = 50;
		t.y = 290;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.height = 55.262;
		t.horizontalCenter = 0;
		t.size = 50;
		t.text = "Your Score";
		t.textAlign = "center";
		t.verticalAlign = "justify";
		t.width = 280.956;
		t.y = 431.969;
		return t;
	};
	_proto.scoreValue_finish_i = function () {
		var t = new eui.Label();
		this.scoreValue_finish = t;
		t.bold = true;
		t.height = 55.262;
		t.horizontalCenter = 0;
		t.size = 50;
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "justify";
		t.width = 280.956;
		t.y = 513.061;
		return t;
	};
	_proto.new_game_button_i = function () {
		var t = new eui.Button();
		this.new_game_button = t;
		t.height = 68;
		t.horizontalCenter = 0;
		t.label = "Button";
		t.skinName = "skins.new_game_button";
		t.width = 168;
		t.y = 688.229;
		return t;
	};
	return finish;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game_screen.exml'] = window.skins.game_screen = (function (_super) {
	__extends(game_screen, _super);
	function game_screen() {
		_super.call(this);
		this.skinParts = ["scoreValue","return_btn","next_display","gameArea","runArea"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this._Rect2_i(),this._Label1_i(),this.scoreValue_i(),this._Rect3_i(),this._Rect4_i(),this._Rect5_i(),this._Rect6_i(),this._Rect7_i(),this._Rect8_i(),this._Rect9_i(),this._Rect10_i(),this._Rect11_i(),this._Rect12_i(),this._Rect13_i(),this._Rect14_i(),this._Rect15_i(),this._Rect16_i(),this._Rect17_i(),this._Rect18_i(),this._Rect19_i(),this._Rect20_i(),this._Rect21_i(),this._Rect22_i(),this._Rect23_i(),this._Rect24_i(),this._Rect25_i(),this._Rect26_i(),this.return_btn_i(),this._Rect27_i(),this._Label2_i(),this.next_display_i(),this.gameArea_i(),this.runArea_i()];
	}
	var _proto = game_screen.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.height = 1136;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xE7E4E4;
		t.height = 960;
		t.width = 600;
		t.x = 20;
		t.y = 150;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.text = "Score:";
		t.x = 20;
		t.y = 37;
		return t;
	};
	_proto.scoreValue_i = function () {
		var t = new eui.Label();
		this.scoreValue = t;
		t.text = "999";
		t.width = 65.639;
		t.x = 119.174;
		t.y = 37;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x656464;
		t.height = 960;
		t.width = 5;
		t.x = 75;
		t.y = 150;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x656464;
		t.height = 960;
		t.width = 5;
		t.x = 135;
		t.y = 150;
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x656464;
		t.height = 960;
		t.width = 5;
		t.x = 195;
		t.y = 150;
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x656464;
		t.height = 960;
		t.width = 5;
		t.x = 255;
		t.y = 150;
		return t;
	};
	_proto._Rect7_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x656464;
		t.height = 960;
		t.width = 5;
		t.x = 315;
		t.y = 150;
		return t;
	};
	_proto._Rect8_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x656464;
		t.height = 960;
		t.width = 5;
		t.x = 375;
		t.y = 150;
		return t;
	};
	_proto._Rect9_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x656464;
		t.height = 960;
		t.width = 5;
		t.x = 435;
		t.y = 150;
		return t;
	};
	_proto._Rect10_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x656464;
		t.height = 960;
		t.width = 5;
		t.x = 495;
		t.y = 150;
		return t;
	};
	_proto._Rect11_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x656464;
		t.height = 960;
		t.width = 5;
		t.x = 555;
		t.y = 150;
		return t;
	};
	_proto._Rect12_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x656464;
		t.height = 5;
		t.width = 600;
		t.x = 20;
		t.y = 265;
		return t;
	};
	_proto._Rect13_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x656464;
		t.height = 5;
		t.width = 600;
		t.x = 20;
		t.y = 325;
		return t;
	};
	_proto._Rect14_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x656464;
		t.height = 5;
		t.width = 600;
		t.x = 20;
		t.y = 385;
		return t;
	};
	_proto._Rect15_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x656464;
		t.height = 5;
		t.width = 600;
		t.x = 20;
		t.y = 445;
		return t;
	};
	_proto._Rect16_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x656464;
		t.height = 5;
		t.width = 600;
		t.x = 20;
		t.y = 505;
		return t;
	};
	_proto._Rect17_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x656464;
		t.height = 5;
		t.width = 600;
		t.x = 20;
		t.y = 565;
		return t;
	};
	_proto._Rect18_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x656464;
		t.height = 5;
		t.width = 600;
		t.x = 20;
		t.y = 625;
		return t;
	};
	_proto._Rect19_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x656464;
		t.height = 5;
		t.width = 600;
		t.x = 20;
		t.y = 685;
		return t;
	};
	_proto._Rect20_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x656464;
		t.height = 5;
		t.width = 600;
		t.x = 20;
		t.y = 745;
		return t;
	};
	_proto._Rect21_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x656464;
		t.height = 5;
		t.width = 600;
		t.x = 20;
		t.y = 805;
		return t;
	};
	_proto._Rect22_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x656464;
		t.height = 5;
		t.width = 600;
		t.x = 20;
		t.y = 865;
		return t;
	};
	_proto._Rect23_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x656464;
		t.height = 5;
		t.width = 600;
		t.x = 20;
		t.y = 925;
		return t;
	};
	_proto._Rect24_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x656464;
		t.height = 5;
		t.width = 600;
		t.x = 20;
		t.y = 985;
		return t;
	};
	_proto._Rect25_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x656464;
		t.height = 5;
		t.width = 600;
		t.x = 20;
		t.y = 1045;
		return t;
	};
	_proto._Rect26_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x656464;
		t.height = 5;
		t.width = 600;
		t.x = 20;
		t.y = 205;
		return t;
	};
	_proto.return_btn_i = function () {
		var t = new eui.Image();
		this.return_btn = t;
		t.height = 50;
		t.source = "return_bound_png";
		t.width = 50;
		t.x = 570;
		t.y = 17;
		return t;
	};
	_proto._Rect27_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 100;
		t.width = 100;
		t.x = 282.968;
		t.y = 17;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.text = "Next:";
		t.x = 191.968;
		t.y = 37;
		return t;
	};
	_proto.next_display_i = function () {
		var t = new eui.Group();
		this.next_display = t;
		t.height = 80;
		t.width = 80;
		t.x = 292.968;
		t.y = 27;
		return t;
	};
	_proto.gameArea_i = function () {
		var t = new eui.Group();
		this.gameArea = t;
		t.height = 960;
		t.width = 600;
		t.x = 20;
		t.y = 150;
		return t;
	};
	_proto.runArea_i = function () {
		var t = new eui.Group();
		this.runArea = t;
		t.height = 960;
		t.width = 600;
		t.x = 20;
		t.y = 150;
		return t;
	};
	return game_screen;
})(eui.Skin);generateEUI.paths['resource/eui_skins/move_block.exml'] = window.skins.move_block = (function (_super) {
	__extends(move_block, _super);
	function move_block() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 60;
		this.width = 60;
		this.elementsContent = [this._Rect1_i()];
	}
	var _proto = move_block.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFF0000;
		t.height = 60;
		t.strokeColor = 0x000000;
		t.strokeWeight = 2.5;
		t.width = 60;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return move_block;
})(eui.Skin);generateEUI.paths['resource/eui_skins/none_screen.exml'] = window.skins.none_screen = (function (_super) {
	__extends(none_screen, _super);
	function none_screen() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Rect1_i()];
	}
	var _proto = none_screen.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.height = 1135;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return none_screen;
})(eui.Skin);generateEUI.paths['resource/eui_skins/start_button_press.exml'] = window.skins.start_button_press = (function (_super) {
	__extends(start_button_press, _super);
	function start_button_press() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 100;
		this.width = 240;
		this.elementsContent = [this._Rect1_i(),this._Label1_i()];
	}
	var _proto = start_button_press.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x9E9B9B;
		t.height = 100;
		t.strokeColor = 0xFFFFFF;
		t.width = 240;
		t.x = -1;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.text = "Start";
		t.textColor = 0x000000;
		t.x = 85;
		t.y = 35;
		return t;
	};
	return start_button_press;
})(eui.Skin);generateEUI.paths['resource/eui_skins/start_button.exml'] = window.skins.start_button = (function (_super) {
	__extends(start_button, _super);
	function start_button() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 100;
		this.width = 240;
		this.elementsContent = [this._Rect1_i(),this._Label1_i()];
	}
	var _proto = start_button.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFDFD;
		t.height = 100;
		t.strokeColor = 0xFFFFFF;
		t.width = 240;
		t.x = -1;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.text = "Start";
		t.textColor = 0x000000;
		t.x = 85;
		t.y = 35;
		return t;
	};
	return start_button;
})(eui.Skin);generateEUI.paths['resource/eui_skins/start_screen.exml'] = window.skins.start_screen = (function (_super) {
	__extends(start_screen, _super);
	function start_screen() {
		_super.call(this);
		this.skinParts = ["start_button"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this._Label1_i(),this.start_button_i()];
	}
	var _proto = start_screen.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 1;
		t.fillColor = 0x000000;
		t.height = 1136;
		t.left = 0;
		t.strokeColor = 0x000000;
		t.top = 0;
		t.width = 640;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 70;
		t.text = "Tetris";
		t.y = 260.496;
		return t;
	};
	_proto.start_button_i = function () {
		var t = new eui.Button();
		this.start_button = t;
		t.height = 100;
		t.skinName = "skins.start_button";
		t.width = 240;
		t.x = 213.07;
		t.y = 640.315;
		return t;
	};
	return start_screen;
})(eui.Skin);