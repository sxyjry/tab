// JavaScript Document
window.onload=function(){
	
	var oUl=document.getElementById("ul1");
	var aLi=oUl.getElementsByTagName("li");	
	var oL=document.getElementById("ol1");
	var aCk=oL.getElementsByTagName("li");
	var oPrev=document.getElementById("prev");
	var oNext=document.getElementById("next");
	var oDiv=document.getElementById("text");
	var aDiv=oDiv.getElementsByTagName("div");
	var oBox=document.getElementById("box");
	var oBtn=document.getElementById("btnBox");
	var iNow=0;
	var timer=null;
	
	function tab(){
		
		for(var i=0;i<aCk.length;i++){
				
				aCk[i].className="";
				aDiv[i].className="";
				aLi[i].className="";
		}
		aCk[iNow].className="active";
		aDiv[iNow].className="active";
		aLi[iNow].className="active";
		
	};
	function next(){
		iNow++;
		if(iNow==aCk.length){
			iNow=0;
		}
		tab();
	};
	
	timer=setInterval(next,1000);

	
	for(var i=0;i<aCk.length;i++){
		aCk[i].index=i;
		aCk[i].onmouseover=function(){
			iNow=this.index;
			tab();
		};
	}
	
	oNext.onclick=function(){
		this.className="active";
		iNow++;
		if(iNow==aCk.length){
			iNow=0;
		}
		tab();
	}
	oNext.onmouseout=oPrev.onmouseout=function(){
		this.className="";
		
	}
	oPrev.onclick=function(){
		this.className="active";
		iNow--;
		if(iNow==-1){
			iNow=aCk.length-1;
		}
		tab();
	}
	
	oBox.onmouseover=function(){
		clearInterval(timer);
		oBtn.style.display="block";
		
		
	};
	
	oBox.onmouseout=function(){
		timer=setInterval(next,1000);	
		oBtn.style.display="none";
	};
	
	
	
};