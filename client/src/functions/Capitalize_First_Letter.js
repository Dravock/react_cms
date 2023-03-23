const Capitalize_First_Letter =(input_array)=> {
    const edited_name = []
    let string
    
    
    var return_String = []
    input_array.forEach(names_in_array => {
        const firstLetter = names_in_array.charAt(0)
        const firstLetterCap = firstLetter.toUpperCase()
        const remainingLetters = names_in_array.slice(1)
        const capitalizedWord = firstLetterCap + remainingLetters
        edited_name.push(capitalizedWord)
    });

    edited_name.forEach(concat_Name => {
        return_String.push(concat_Name)
    
    });
    string = return_String.join(" ")
    
    return string
}

export default Capitalize_First_Letter