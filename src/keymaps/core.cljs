(ns keymaps.core
	(:require [reagent.core :as reagent :refer [atom]]))

(enable-console-print!)

(defonce current-key-code (reagent/atom {:which    "press any key to know"
																				 :key      ""
																				 :location ""
																				 :meta-key ""}))

(defn keycode []
	[:div {:class "keycode"} (:which @current-key-code)])

(defn events []
	[:div {:class "events"}
	 [:div {:class "event"} (:key @current-key-code)]
	 [:div {:class "event"} (:location @current-key-code)]
	 [:div {:class "event"} (str (:meta-key @current-key-code))]])

(defn view []
	[:div {:class "view" :tabindex 1 :on-key-down #(reset! current-key-code {:which    (.-which %)
																																					 :key      (.-key %)
																																					 :location (.-location %)
																																					 :meta-key (.-metaKey %)})}
	 [keycode]
	 [events]])

(reagent/render-component [view]
													(. js/document (getElementById "app")))
