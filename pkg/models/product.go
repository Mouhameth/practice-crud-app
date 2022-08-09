package models

import(
	"gorm.io/gorm"
	"github.com/mouhameth/pratice-crud-go/pkg/config"
	"fmt"
)

var db *gorm.DB

type Product struct{
	gorm.Model
	Name string `gorm:""json:"name"`
	Category string `json:"category"`
	Quantity int `json:"quantity"`
	Price int `json:"price"`
}

func init(){
	config.Connect()
	db = config.GetDB()
	db.AutoMigrate(&Product{})
}

func (b *Product) CreateProduct() *Product{
	
	db.Create(&b)
	return b
}

func GetAllProducts() []Product{
	var Products []Product
	db.Find(&Products)
	return Products
}

func GetProductById(Id int64) (*Product, *gorm.DB){
	var getProduct Product
	db:=db.Where("ID=?", Id).Find(&getProduct)
	return &getProduct, db

}

func DeleteProduct(ID int64) Product{
	var product Product
	fmt.Println(product)
	db.Where("ID=?", ID).Delete(&Product{})
	return product

}
