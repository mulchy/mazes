(ns my-sketch.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(def step 10)
(def size 500)

(def edges (concat 
            (map flatten (for [x (range 0 size step)
                               y (range 0 size step)]
                           [[x y] [(+ x step) y]]))
            (map flatten (for [x (range 0 size step)
                               y (range 0 size step)]
                           [[x y] [x (+ y step)]]))))

(defn remove-edge [edges edge]
  (remove #(= edge %) edges))

(def dir->points {:N [0 (- step)] :S [0 step] :E [step 0] :W [(- step) 0]})

(defn add-points [[x1 y1] [x2 y2]] [(+ x1 x2) (+ y1 y2)])
(defn sub-points [[x1 y1] [x2 y2]] [(+ x1 x2) (+ y1 y2)])

(defn move [point direction]
  "Takes a point and and a direction and returns the adjacent point in that direction"
  (add-points (direction dir->points) point))

(defn get-edge-map [[x y :as point]]
  "Takes the upper left corner of a cell and returns a map of the edges of the cell and the directions they correspond to"
  (zipmap (map flatten
               [[point [(+ x step) y]]
                [point [x (+ y step)]]
                [[(+ x step) y] [(+ x step) (+ y step)]]
                [[x (+ y step)] [(+ x step) (+ y step)]]])
          [:N :W :E :S]))

(defn edge-and-dir->point [[a b _ _] dir]
  "Convert an edge and a direction to the point "
  (case dir
    (:N :W) [a b]
    :S [a (- b step)]
    :E [(- a step) b]))

(defn remove-invalid-edges [edge-map visited]
  "Takes an edge-map and a list of visited nodes, removes edges from the map that are invalid"
  (remove
   (fn [[[x1 y1 x2 y2 :as edge] direction]]
     (or (= 0 x1 x2)
         (= 0 y1 y2)
         (= size x1 x2)
         (= size y1 y2)
         (some #{(move
                  (edge-and-dir->point edge direction)
                  direction)}
               visited)))
   edge-map))

(defn choose-edge
  "randomly picks a wall to knock down"
  [point visited]
  (->> point
       get-edge-map
       (#(remove-invalid-edges % visited))
       shuffle
       first))

(defn run [initial-point edges]
  "Generate maze via recursive backtracking"
  (loop [point initial-point
         edges edges
         visited [point]
         stack []]
    (if (and
         (> (count visited) 1)
         (= point initial-point))
      edges
      (let [[edge-to-remove direction] (choose-edge point visited)]
        (if (not (nil? edge-to-remove))
          (let [next-point (move point direction)]
            (recur next-point
                   (remove-edge edges edge-to-remove)
                   (conj visited next-point)
                   (conj stack point)))
          ;; else backtrack
          (recur
           (peek stack)
           edges
           (conj visited point)
           (pop stack)))))))

(defn draw-grid [state]
  (q/no-loop)
  (doseq [edge (run [0 0] edges)]
    (apply q/line edge)))

(q/defsketch my-sketch
  :host "my-sketch"
  :size [size size]
  :draw draw-grid
  :middleware [m/fun-mode])
