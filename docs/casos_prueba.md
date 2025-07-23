# 🧪 Casos de Prueba Automatizados

Este archivo contiene una lista de los casos de prueba automatizados para el sitio [SauceDemo](https://www.saucedemo.com/), utilizando Playwright con TypeScript y el patrón Page Object Model (POM).

---

## 📋 Tabla de Casos de Prueba

| ID    | Nombre del Caso                             | Precondición                | Pasos                                                         | Resultado Esperado                                     |
|-------|---------------------------------------------|-----------------------------|----------------------------------------------------------------|--------------------------------------------------------|
| TC01  | Login con credenciales válidas              | Página de login abierta     | Ingresar standard_user, contraseña válida y hacer login       | Redirige al inventario (/inventory)                   |
| TC02  | Login con credenciales inválidas            | Página de login abierta     | Ingresar usuario y contraseña inválidos y hacer login         | Muestra mensaje de error y permanece en login         |
| TC03  | Login con campos vacíos                     | Página de login abierta     | Dejar usuario y contraseña vacíos, hacer clic en login        | Muestra error por campos obligatorios                 |
| TC04  | Login con contraseña vacía                  | Página de login abierta     | Ingresar usuario válido, dejar contraseña vacía, hacer login  | Muestra error por contraseña faltante                 |
| TC05  | Agregar un producto al carrito              | Usuario logueado            | Hacer clic en "Add to cart" en un producto                   | Producto aparece en el carrito                        |
| TC06  | Remover producto del carrito                | Producto agregado al carrito| Hacer clic en "Remove" en el producto                        | Producto ya no está en el carrito                     |
| TC07  | Finalizar compra con datos válidos          | Producto en el carrito      | Checkout, ingresar datos, continuar y finalizar              | Muestra mensaje de compra exitosa                     |
| TC08  | Finalizar compra con campos vacíos          | Producto en el carrito      | Checkout sin completar los campos obligatorios               | Muestra error indicando campos requeridos             |
| TC09  | Ver detalle de un producto desde inventario | Usuario logueado            | Hacer clic en el nombre o imagen del producto                | Se accede a la página de detalle del producto         |
| TC10  | Logout exitoso desde menú                   | Usuario logueado            | Abrir menú y hacer clic en Logout                           | Redirige a la página de login                         |

---

✅ Estos casos están automatizados con Playwright e implementados bajo el patrón Page Object Model (POM).