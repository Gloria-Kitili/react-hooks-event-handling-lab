// Code Keypad Component Here

function Keypad (){
function Change(){
        
        console.log('Entering password...')
}
    
    return (
    
    <input type = 'password' onChange = {Change}></input>
    
    )
}

export default Keypad;