(ns keymaps.core
	(:require [reagent.core :as reagent :refer [atom]]))

(enable-console-print!)

(defonce current-key-code (reagent/atom {:which    "-1"
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

(defn reset-state [event]
	(reset! current-key-code {:which    (.-which event)
														:key      (.-key event)
														:location (.-location event)
														:meta-key (.-metaKey event)}))

(defn view []
	[:div {:class "view" :tabindex 1 :on-key-down reset-state}
	 [keycode]
	 [events]])

(reagent/render-component [view]
													(. js/document (getElementById "app")))
