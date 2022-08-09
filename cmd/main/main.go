package main

import(
	"log"
	"net/http"
	"github.com/gorilla/mux"
	"github.com/mouhameth/pratice-crud-go/pkg/routes"
	"github.com/rs/cors"
)

func main(){
	r := mux.NewRouter()
    //we enable cors
	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"https://*", "http://*"},
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Accept", "Authorization", "Content-Type", "X-CSRF-Token"},
		ExposedHeaders:   []string{"Link"},
		AllowCredentials: false,
		MaxAge:           300, 
	  })

    handler := c.Handler(r)
	routes.RegisterProductsRoutes(r)
	http.Handle("/",r)
	log.Fatal(http.ListenAndServe("localhost:9010",handler))
}

