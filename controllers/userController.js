
const users = [
    {
        user: "gabo",
        password: "1234"
    }
]

export function user_login(user, password){
    let find_user_obj = null

    users.forEach(user_obj => {
        if(user_obj.user == user){
            if(user_obj.password == password){
                find_user_obj = user_obj
                return
            } 
        }
    });
    return find_user_obj
}

export function user_register(user, password){

    for (const user_obj of users) {
        console.log(user_obj)
        if(user_obj.user == user){
            console.log("return null")
            return null
        }
    }
    console.log("return something")

    const new_user = {user: user, password: password}
    users.push(new_user)

    return new_user
}

export function get_single_user(user_id){

    for (let index = 0; index < users.length; index++) {
        const element = users[index];
        if(element.user == user_id){
            return element
        }
    }
    return null
}

export function get_multiple_users() {
    return users;
}

export function delete_user(user_id) {
    const index = users.findIndex(u => u.user === user_id);
    if (index !== -1) {
        users.splice(index, 1);
        return true;
    }
    return false;
}

export function update_user_password(user_id, new_password) {
    const user = users.find(u => u.user === user_id);
    if (user) {
        user.password = new_password;
        return true;
    }
    return false;
}

//Login
export const loginUsuario = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const usuario = await prisma.usuario.findUnique({
        where: { email },
      });
  
      if (!usuario) {
        return res.status(401).json({ success: false, message: "Usuario no encontrado" });
      }
  
      if (usuario.password !== password) {
        return res.status(401).json({ success: false, message: "Contraseña incorrecta" });
      }
  
      res.status(200).json({ success: true, usuario });
    } catch (error) {
      res.status(500).json({ success: false, message: "Error en el servidor" });
    }
  };
  