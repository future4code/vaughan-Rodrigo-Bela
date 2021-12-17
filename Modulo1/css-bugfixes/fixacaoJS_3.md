```
	  function calculaNota(ex, p1, p2) {
	    
	            const med1 = ex * 1
	            const med2 = p1 * 2
	            const med3 = p2 * 3
	            
	            const soma = med1 + med2 + med3;
	            const divisao = soma / 6;
	            let notaFinal = undefined
	            
	          if (divisao >= 9) {notaFinal = "A"}
	            else if (divisao < 9) 
	              if (divisao > 7.5) {notaFinal = "B"}
	              
	          if (divisao < 7.5) {notaFinal = "C"}
	            else if (divisao < 6)
	            if (divisao < 6) {notaFinal = "D"} 
	         
	          
	          return notaFinal
	            }
	        
	        calculaNota()


```