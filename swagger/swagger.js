/**
 * @swagger
 *  components:
 *   schemas:
 *     product:
 *       type: object
 *       required:
 *         - name
 *         - description
 *         - price
 *         - category
 *         - producttype
 *         - features
 *       properties:
 *         name:
 *           type: string
 *           descripition: Name of the product
 *         description:
 *           type: string
 *           descripition: Details about the product
 *         price:
 *           type: number
 *           descripition: Price of the product
 *         category:
 *           type: string
 *           descripition: Name of the product category
 *         producttype:
 *           type: string
 *           descripition: Type of the product
 *         features:
 *           type: object
 *           description: Features of product in json format
 *     category:
 *       type: object
 *       required:
 *         - name
 *         - icon
 *         - color
 *       properties:
 *         name:
 *           type: string
 *           descripition: Name of the category
 *         icon:
 *           type: string
 *           descripition: Icon name of the category
 *         color:
 *           type: string
 *           descripition: color name of the category
 *     user:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *         - contactno
 *       properties:
 *         name:
 *           type: string
 *           descripition: Name of the user
 *         email:
 *           type: string
 *           descripition: email of the user


 *         password:

 *           type: string

 *           descripition: Password of the user

 *         contactno:

 *           type: number

 *           descripition: Contact number of the user

 *   securitySchemes:

 *     BearerAuth:

 *       type: http

 *       scheme: bearer

 */

/**

 * @swagger

 * tags:

 *   name: Products

 *   description: The Product manages all product related api's

 */

/**

 * @swagger

 * tags:

 *   name: Users

 *   description: The user manages login and register details

 */

/**

 * @swagger

 * tags:

 *   name: Category

 *   description: The Category manages all category related api's

 */

/**

 * @swagger

 * /products/:

 *   get:

 *     summary: Return the list of all products

 *     tags: [Products]

 *     responses:

 *       200:

 *         description: The list of all the products

 *         content:

 *           application/json:

 *             schema:

 *               type: array

 *               items:

 *                 $ref: '#/components/schemas/product'

 * 

 */
 
 /**

 * @swagger

 * /products/search/{item}:

 *   get:

 *     summary: Return the list of searched products.

 *     tags: [Products]

 *     parameters:

 *       - in: path

 *         name: item

 *         schema:

 *           type: string

 *         description: Seached value

 *     responses:

 *       200:

 *         description: The list of all the products

 *         content:

 *           application/json:

 *             schema:

 *               $ref: '#/components/schemas/product'

 *       404:

 *         description: Product not found

 */

/**

 * @swagger

 * /products/addProduct:

 *   post:

 *     summary: Create a new Product

 *     security: 

 *       - BearerAuth: [user]

 *     tags: ['Products']

 *     requestBody:

 *       required: true

 *       content:

 *         application/json:

 *           schema:

 *             $ref: '#/components/schemas/product'

 *     responses:

 *       200:

 *         description: Product was successfully created

 *         content: 

 *           application/json:

 *             schema:

 *               $ref: '#/components/schemas/product'

 *       500:

 *         description: Product cannot be created, Internal server error.

 */

/**

/**

 * @swagger

 * /products/deleteProduct/{id}:

 *   delete:

 *     summary: Remove a Product

 *     security: 

 *       - BearerAuth: [user]

 *     tags: ['Products']

 *     parameters:

 *       - in: path

 *         name: id

 *         schema:

 *           type: string

 *         required: true

 *         description: Product Id     

 *     responses:

 *       200:

 *         description: Product was successfully deleted

 *       404:

 *         description: Product cannot be deleted, as product does'nt found.

 */

/**

 * @swagger

 * /products/updateProduct/{id}:

 *   put:

 *     summary: Update the products

 *     security: 

 *       - BearerAuth: [user]

 *     tags: [Products]

 *     parameters:

 *       - in: path

 *         name: id

 *         schema:

 *           type: string

 *         required: true

 *         description: The Product Id

 *     requestBody:

 *          required: true

 *          content:

 *            application/json:

 *              schema:

 *                $ref: '#/components/schemas/product'

 *     responses:

 *        200:

 *          description: The product is updated

 *        400:

 *          description: Invalid product

 *        500:

 *          description: Product cannot be created

 */

/**





/**

 * @swagger

 * /categories/:

 *   get:

 *     summary: Return the list of all category

 *     tags: [Category]

 *     responses:

 *       200:

 *         description: The list of all the category

 *         content:

 *           application/json:

 *             schema:

 *               type: array

 *               items:

 *                 $ref: '#/components/schemas/category'

 *       500:

 *         description: Cannot get the category list, database error.

 *   post:

 *     summary: Create a new Category

 *     security: 

 *       - BearerAuth: [user]

 *     tags: ['Category']

 *     requestBody:

 *       required: true

 *       content:

 *         application/json:

 *           schema:

 *             $ref: '#/components/schemas/category'

 *     responses:

 *       200:

 *         description: Category successfully created

 *         content: 

 *           application/json:

 *             schema:

 *               $ref: '#/components/schemas/category'

 *       500:

 *         description: Category cannot be created, Internal server error.

 */
 
 /**

 * @swagger

 * /users/signup:

 *   post:

 *     summary: Create a new User

 *     tags: ['Users']

 *     requestBody:

 *       required: true

 *       content:

 *         application/json:

 *           schema:

 *             $ref: '#/components/schemas/user'

 *     responses:

 *       200:

 *         description: Userd details has been saved

 *         content: 

 *           application/json:

 *             schema:

 *               $ref: '#/components/schemas/user'

 *       400:

 *         description: User cannot be created.

 */
 
 
 /**

 * @swagger

 * /users/login:

 *   post:

 *     summary: Login user

 *     tags: ['Users']

 *     requestBody:

 *       required: true

 *       content:

 *         application/json:

 *           schema:

 *             type: object

 *             properties:

 *               email:

 *                 type: string

 *               password:

 *                 type: string

 *     responses:

 *       200:

 *         description: User successfully logged in

 *         content: 

 *           application/json:

 *             schema:

 *              type: object

 *              properties:

 *                user:

 *                  type: string

 *                token: 

 *                  type: string

 *       404:

 *         description: User details not found.

 *       401:

 *         description: Passoword is wrong

 */



